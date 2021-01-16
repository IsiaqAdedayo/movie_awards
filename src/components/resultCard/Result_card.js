import React from 'react'
import './result_card.css'
import { connect } from 'react-redux';
import {movieNominations} from '../../redux/movie/movieActions';

const ResultCard = ({movie,movieNominations,movieData}) => {
   
    const movieMax = movieData && movieData.nominations && (movieData.nominations.length > 4) ? true : movieData.nominations.includes(movie);
    
    return (
        <div>
            <div className="result-card">
            <div className="poster-wrapper">
                {
                    movie.Poster? 
                        <img 
                            src={movie.Poster}
                            alt={`${movie.Title} poster`}
                        />
                    :
                    <div className="filler-poster" />
                }
            </div>
            <div className="info">
                <div className="header">
                <h3 className="title">
                    {movie.Title}
                </h3>
                <h4 className="release-date">
                    {
                        movie.Year ? movie.Year : '' 
                    }
                    
                </h4>
                </div>
                <div className="controls">
                    <button className="btn" disabled={movieMax} onClick = {() => movieNominations(movie)}>
                        Nominate
                    </button>
                </div>
            </div>
            
        </div>
        </div>
    )
}

const mapStateToProps = ({movies}) => {
    return{
        movieData: movies
    }
}

const mapDispatchToProps = dispatch => {
    return{
        movieNominations: (movie) => dispatch(movieNominations(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);
