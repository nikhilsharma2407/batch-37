import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { countReducer } from './countReducer'

export default combineReducers({
    user: userReducer,
    countReducer
});

