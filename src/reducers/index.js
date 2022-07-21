import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import clickEventReducer from "./clickEventReducer";
import roomReducer from "./roomReducer";

const reducers = combineReducers({
    authReducer,
    alertReducer,
    clickEventReducer,
    roomReducer
});

export default reducers;