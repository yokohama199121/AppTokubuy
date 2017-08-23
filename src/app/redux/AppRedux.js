import {NewsReducer} from "../reducer/NewsReducer";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    news : NewsReducer
});
export const store = createStore(reducer);