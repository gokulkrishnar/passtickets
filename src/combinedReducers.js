import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import homeReducer from "./App/Home/Home.Reducer"

export default combineReducers({
    routing: routerReducer,
    homeReducer
    
});