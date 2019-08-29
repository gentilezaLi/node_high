import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import loginReducer from "./loginReducer"
let reducer = combineReducers({ loginReducer })
let store = createStore(reducer, applyMiddleware(thunk))
export default store;