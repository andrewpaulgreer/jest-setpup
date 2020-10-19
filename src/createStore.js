import {createStore, applyMiddleware} from 'redux'
import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

// we want to use same middlewares

export const middlewares = [ReduxThunk]

export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)

// creating store

export const store = createStoreWithMiddleWare(RootReducer)