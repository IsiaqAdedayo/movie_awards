import React from 'react'
import { connect } from 'react-redux';
import {removeNomination} from '../../redux/movie/movieActions';



const Nominations = ({nomination,removeNomination}) => {


    return (
        <div className="movie_card">
             <div className="movie_picture">
                <img src={nomination.Poster} alt={nomination.Title}/>
            </div>
            <div className="movie_details">
                <div className="movieTitle"><h2>{nomination.Title}</h2></div>
                <p>{nomination.Year}</p>
                <div className="movie_icon" onClick= {() => removeNomination(nomination.imdbID)}> <p>Remove from list</p> </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return{
        removeNomination: (nomination) => dispatch(removeNomination(nomination))
    }
}


export default connect(null, mapDispatchToProps)(Nominations);
