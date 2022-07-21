import api from '../config';
import { getRegisteredConfig, getApplicationConfig } from '../utils';
import {
    SIGN_UP_LOADING,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_IN_LOADING,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    FETCH_AUTH_USER_LOADING,
    FETCH_AUTH_USER_SUCCESS,
    FETCH_AUTH_USER_FAIL
} from '../actionTypes/authActionTypes';
import {
  SIGN_UP_SUCCESS_ALERT,
  SIGN_UP_ERROR_ALERT,
  SIGN_IN_SUCCESS_ALERT,
  SIGN_IN_ERROR_ALERT,
  SIGN_OUT_SUCCESS_ALERT
} from '../actionTypes/alertActionTypes';

export const fetchAuthUserHandler = () => async (dispatch) => {
  const config = getRegisteredConfig();
    try {
        dispatch({
          type: FETCH_AUTH_USER_LOADING
        });

        const {data} = await api.get('/auth/me', config);

        console.log(data);

        dispatch({
          type: FETCH_AUTH_USER_SUCCESS,
          payload: {
            data: data?.data?.user ?? ''
          }
        });
    } catch (err) {
        console.log(err);
    }
}

export const signOutHandler = () => (dispatch) => {
    dispatch({
      type: SIGN_OUT_SUCCESS
    });

    localStorage.removeItem('authToken');

    dispatch({
      type: SIGN_OUT_SUCCESS_ALERT,
      payload: {
        signOutSuccessMessage: 'Successfully Signed Out'
      }
    });

    // setAuthSuccess({
    //     ...authSuccess,
    //     isLoggedOut: true
    // });
}

// const handleOpenModal = () => {
//     setOpenModal(true);
// }

// const handleCloseModal = () => {
//     setOpenModal(false);
// }

// const fetchUserPhoto = async (file) => {
//   const config = getRegisteredConfig();
//     try {
//         const res = await api.get(`/auth/fetchUserPhoto/${file}`, config);

//         setUserPhotoURL(res.data);
//     } catch (err) {
//         console.log(err);
//         setUserPhotoError(err);
//     }
// }

export const signUpHandler = (
  signUpFields, 
  setSignUpFields, 
  setOpenAlert, 
  setOpenModal
) => async (dispatch) => {
    const {
        name,
        email,
        password,
        password2: passwordConfirm,
        isTeacher
    } = signUpFields;
    const config = getApplicationConfig();
    try {
        dispatch({
            type: SIGN_UP_LOADING
        });

      const {data} = await api.post(
          '/auth/signUp', 
          JSON.stringify({
              name,
              email,
              password,
              passwordConfirm,
              isTeacher
          }),
          config
      );
  
      if(data && data.status === 'success') {
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: {
              data
          }
        });

        setSignUpFields({
          name: '',
          email: '',
          password: '',
          password2: '',
          isTeacher: false
        });
        
        localStorage.setItem('authToken', data.token);

        setOpenModal(false);

        dispatch({
          type: SIGN_UP_SUCCESS_ALERT,
          payload: {
            signUpSuccessMessage: 'Successfully Signed Up'
          }
        });
      }
    } catch (err) {
      const {response} = err;
      
      if(password !== passwordConfirm || response.data.message) {
        dispatch({
          type: SIGN_UP_ERROR_ALERT,
          payload: {
            errorMessage: {
              serverMessage: response.data.message,
              clientMessage: 'Password do not match!'
            }
          }
        });
      }

      // setAlertMessages({
      //   signUpAlert: response.data.message
      // });


      setOpenAlert(true);
    }
  }

export const signInHandler = (
  signInFields, 
  setSignInFields, 
  setOpenAlert, 
  setOpenModal
) => async(dispatch) => {
  const {email, password} = signInFields;
  const config = getApplicationConfig();
    try {
        const {data} = await api.post(
          '/auth/signIn', 
          JSON.stringify({
              email,
              password
          }),
          config
      );
  
      if(data && data.status === 'success') {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {
            data
          }
        });

        setSignInFields({
          email: '',
          password: ''
        });
        
        localStorage.setItem('authToken', data.token);

        setOpenModal(false);

        dispatch({
          type: SIGN_IN_SUCCESS_ALERT,
          payload: {
            signInSuccessMessage: 'Successfully Signed In'
          }
        });
      }
    } catch (err) {
      const {response} = err;

      dispatch({
        type: SIGN_IN_ERROR_ALERT,
        payload: {
          errorMessage: response.data.message
        }
      });

      // setAlertMessages({
      //   signInAlert: response.data.message
      // });

      setOpenAlert(true);
    }
  }