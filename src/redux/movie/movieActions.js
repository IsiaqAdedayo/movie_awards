import axios from 'axios';

export const MOVIE_LOADING = "MOVIE_LOADING"; 
export const MOVIE_SUCCESS = "MOVIE_SUCCESS"; 
export const MOVIE_ERROR = "MOVIE_ERROR"; 
export const MOVIE_NOMINATIONS = "MOVIE_NOMINATIONS";
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";

const movieLoading = () => {
    return{
        type: MOVIE_LOADING,
    }
}

const movieSuccess = (data) => {
    return{
        type: MOVIE_SUCCESS,
        payload: data
    }
}

const movieError = (error) => {
    return{
        type: MOVIE_ERROR,
        payload: error
    }
}

const movieNominations = (movie) => {
    return{ 
        type: MOVIE_NOMINATIONS,
        payload: movie
    }
}

const removeNomination = (movie) => {
    return{ 
        type: REMOVE_NOMINATION,
        payload: movie
        
    }
}

const fetchData = (query) => {
    return dispatch => {
        dispatch(movieLoading())
        axios.get(`http://www.omdbapi.com/?apikey=e85b91b8&s=${query}`)
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(movieSuccess(res.data))
            return res.data;
        })
        .catch(error => dispatch(movieError(error.message)))
    }
}

export  {fetchData, movieNominations, removeNomination};

