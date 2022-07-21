import {
    SIGN_UP_SUCCESS_ALERT,
    SIGN_UP_ERROR_ALERT,
    SIGN_OUT_SUCCESS_ALERT,
    SIGN_IN_SUCCESS_ALERT,
    SIGN_IN_ERROR_ALERT
} from '../actionTypes/alertActionTypes';

const alertReducer = (state={}, action) => {
    switch(action.type) {
        case SIGN_UP_SUCCESS_ALERT:
            const {signUpSuccessMessage} = action.payload;

            return {
                ...state,
                signUpSuccessAlert: signUpSuccessMessage
            }
        case SIGN_UP_ERROR_ALERT:
            const {errorMessage: signUpErrorMessage} = action.payload;

            return {
                ...state,
                signUpErrorAlert: signUpErrorMessage.serverMessage ? signUpErrorMessage.serverMessage : signUpErrorMessage.clientMessage
            }
        case SIGN_IN_SUCCESS_ALERT:
            const {signInSuccessMessage} = action.payload;

            return {
                ...state,
                signInSuccessAlert: signInSuccessMessage
            }
        case SIGN_IN_ERROR_ALERT:
            const {errorMessage: signInErrorMessage} = action.payload;

            return {
                ...state,
                signInErrorAlert: signInErrorMessage
            }
        case SIGN_OUT_SUCCESS_ALERT:
            const {signOutSuccessMessage} = action.payload;

            return {
                ...state,
                signOutSuccessAlert: signOutSuccessMessage
            }
        default:
            return state;
    }
}

export default alertReducer;