import {applyMiddleware, createStore} from 'redux'
//import  {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'
import thunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(thunk))

export default store;

