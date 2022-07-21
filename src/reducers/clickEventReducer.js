import {
    SIGN_UP_EVENT,
    SIGN_IN_EVENT,
    SIGN_OUT_EVENT
} from '../actionTypes/clickEventActionTypes';

const clickEventReducer = (state={}, action) => {
    switch(action.type) {
        case SIGN_UP_EVENT:
            return {
                ...state,
                isSignedUp: true
            }
        case SIGN_IN_EVENT:
            return {
                ...state,
                isSignedIn: true
            }
        case SIGN_OUT_EVENT:
            return {
                ...state,
                isSignedOut: true
            }
        default:
            return state;
    }
}

export default clickEventReducer;