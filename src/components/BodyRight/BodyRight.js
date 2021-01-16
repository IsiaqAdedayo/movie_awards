import React from 'react';
import "./body_right.css";
import Nominations from './Nominations';
import { connect } from 'react-redux';



const BodyRight = ({movies,nominations}) => {

    const movieMax = movies && nominations && (nominations.length < 5) ? true : false;
    
    const alerts = () => nominations.length === 5 ? alert(`You have reached the maximum amount of nominations!!!`) : null;

    alerts()
    

    const handleSubmit = () => {
        window.location.reload(false)
        alert(`Thanks for voting`)
    }

    return (
        <div className="body_right">
            <div className="body_right_container">
            <h1>Nominations</h1>
                <div className="movie_cards">
                    
                       {
                           movies && nominations && nominations.map(nomination => <Nominations key={nomination.imdbID} nomination={nomination}/>)
                       }
                    
                </div>

                <div className="submit">
                    <button className="submitBtn" disabled={movieMax} onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({movies}) => {
    return{
        nominations: movies.nominations,
        movies:movies
    }
}


export default connect(mapStateToProps, null)(BodyRight);