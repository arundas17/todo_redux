import { combineReducers } from "redux";
import { todoReducer } from "./todoReducers";


export const rootReducer = combineReducers({
    todo:todoReducer,
    // user:userReducer,
})