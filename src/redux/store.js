import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";


export const store =createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export const persistor = persistStore(store);
