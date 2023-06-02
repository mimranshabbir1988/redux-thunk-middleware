import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import userRed from './userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    userList: userRed,    
})

const initialState = [];


const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
  ));

  export default store;


