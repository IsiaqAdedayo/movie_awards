import { MOVIE_LOADING, MOVIE_SUCCESS, MOVIE_ERROR, MOVIE_NOMINATIONS,REMOVE_NOMINATION} from './movieActions';

const initialState =  {
    loading: false,
    movies: [],
    error: '',
    nominations: [],
    removeNomination: [],
    
}

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case MOVIE_LOADING:
            return {
                ...state,
                loading: true
            }
        case MOVIE_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
        case MOVIE_ERROR:
            return {
                ...state,
                error: action.payload
            }
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