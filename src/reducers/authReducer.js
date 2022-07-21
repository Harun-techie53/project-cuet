import {
    SIGN_UP_LOADING,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_IN_LOADING,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT_LOADING,
    SIGN_OUT_SUCCESS,
    FETCH_AUTH_USER_LOADING,
    FETCH_AUTH_USER_SUCCESS,
    FETCH_AUTH_USER_FAIL
} from '../actionTypes/authActionTypes';

const initialState = {
    isLoading: false,
    authToken: null,
    authUserDetails: null,
    signUpError: null
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGN_UP_LOADING:
        case SIGN_IN_LOADING:
        case FETCH_AUTH_USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP_SUCCESS:
            const {data: signUpSuccessData} = action.payload;
            return {
                ...state,
                isLoading: false,
                authToken: signUpSuccessData.token
            }
        case SIGN_UP_ERROR: 
            return {
                ...state,
                isLoading: false
            }
        case SIGN_IN_LOADING: 
            return {
                ...state,
                isLoading: true
            }
        case SIGN_IN_SUCCESS:
            const {data: signInSuccessData} = action.payload;
            return {
                ...state,
                isLoading: false,
                authToken: signInSuccessData.token
            }
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authToken: null,
                authUserDetails: null
            }
        case FETCH_AUTH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUserDetails: action.payload.data
            }
        default:
            return state;
    }
}

export default authReducer;