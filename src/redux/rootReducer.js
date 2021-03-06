import { combineReducers } from 'redux';
import movieReducer from './movie/movieReducer'
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['movies']
}



const rootReducer = combineReducers(
    {
        movies: movieReducer
    }
)

export default persistReducer(persistConfig, rootReducer);