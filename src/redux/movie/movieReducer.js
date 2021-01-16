import {  MOVIE_NOMINATIONS,REMOVE_NOMINATION} from './movieActions';

const initialState =  {
    nominations: [],
    removeNomination: [],
    
}

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case MOVIE_NOMINATIONS:
            return{
                ...state,
                nominations: [action.payload, ...state.nominations]
            }
        case REMOVE_NOMINATION:
            return{
                ...state,
                nominations: state.nominations.filter(nomination => nomination.imdbID !== action.payload) 
            }
        default:
            return state;
    }
}

export default movieReducer;