import {applyMiddleware, createStore} from 'redux';
import {coffeeReducer} from '../modules/HomePage/reducers';
import thunk from 'redux-thunk'

// const rootReducer = combineReducers({
//     coffeeList: coffeeReducer
// })

const middlewares = [
    thunk
]

export const store = createStore(coffeeReducer,applyMiddleware(...middlewares));