import React, {useState} from 'react';
import "./body_left.css"
import axios from 'axios'
import ResultCard from '../resultCard/Result_card'
import Loader from 'react-loader-spinner'


const BodyLeft = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    

    const handleChange = e => {
        e.preventDefault()
        setQuery(e.target.value)
        axios.get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_API_KEY}&type=movie`)
        .then(res => setResults(res.data.Search))
        .catch(error => console.log(error))
    }
    
    return (
        <div className="body_left">
            <div className="body_left_container">
                <div className = "introDiv">
                    <h1>Hello,</h1>
                    <p>Welcome to your dashboard, kindly make your selections below</p>
                </div>
                <div className="intro_input">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder = "Make your Nominations..."
                        value = {query}
                        onChange = { handleChange }
                    />
                </div>

                {
                    results ?(
                        <ul className="results">
                            {results.map((movie) => 
                                <li key={movie.imdbID}>
                                    <ResultCard movie={movie} />
                                </li>
                            )}
                        </ul>
                    ):(
                        <div className="loader">
                            <h2>loading</h2> &nbsp;&nbsp;
                            <div style={{marginTop:"3%"}}>
                                <Loader
                                type="ThreeDots"
                                color= "#e6e0c8"
                                height={30}
                                width={30} />
                            </div>
                        </div>
                    )
                }

                <div>
                    <div className="awards_icon">
                        <div>
                            <div className="first_icon">
                                <i className="fas fa-star-half-alt fa-3x"></i>
                            </div>
                        </div>
                        <div>
                            <div className="second_icon">
                                <i className="fas fa-film fa-3x"></i>
                            </div>
                        </div>
                        <div>
                            <div className="third_icon">
                                <i className="fas fa-medal fa-3x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyLeft