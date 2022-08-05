import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import clickEventReducer from "./clickEventReducer";
import roomReducer from "./roomReducer";
import researchReducer from "./researchReducer";

const reducers = combineReducers({
    authReducer,
    alertReducer,
    clickEventReducer,
    roomReducer,
    researchReducer
});

export default reducers;