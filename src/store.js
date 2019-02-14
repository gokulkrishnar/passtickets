//import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import Reducers from "../src/combinedReducers";
//import RootSaga from "./Saga.Root";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

export let Store = null;
// const middleWare = routerMiddleware(Logger, thunk, hashHistory);
if(process.env.NODE_ENV === "production"){
    Store = createStore(Reducers, applyMiddleware(sagaMiddleware));
}else{
    Store = createStore(Reducers, applyMiddleware(sagaMiddleware, Logger));
}
