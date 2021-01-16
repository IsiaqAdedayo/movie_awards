import axios from 'axios';
 
export const MOVIE_NOMINATIONS = "MOVIE_NOMINATIONS";
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";


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


export  {movieNominations, removeNomination};

