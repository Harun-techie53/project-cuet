import React, {useContext, useState} from 'react'
import { Modal } from '@mui/material';
import LoginRegistrationView from './LoginRegistrationView';
import api from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { signUpHandler, signInHandler } from '../../actions/authAction';

const LoginRegistration = ({
  openModal,
  setOpenModal
}) => {
  const [addClass, setAddClass] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alertReducer);
  const signUpErrorAlert = alerts.signUpErrorAlert ?? '';
  const signInErrorAlert = alerts.signInErrorAlert ?? '';
  // const [openAlert, setOpenAlert] = useState(false);
  // const [alertMessages, setAlertMessages] = useState({
  //   signUpAlert: '',
  //   signInAlert: ''
  // });

  const [signUpFields, setSignUpFields] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    isTeacher: false
  });

  const [signInFields, setSignInFields] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setSignUpFields({
        ...signUpFields,
        [e.target.name]: e.target.value
    });
  }

  const handleSignInFieldsChange = (e) => {
    setSignInFields({
        ...signInFields,
        [e.target.name]: e.target.value
    });
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    
    dispatch(signUpHandler(signUpFields, setSignUpFields, setOpenAlert, setOpenModal));
  }

  const handleSignInSubmit = async(e) => {
    e.preventDefault();

    dispatch(signInHandler(signInFields, setSignInFields, setOpenAlert, setOpenModal));
  }
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <LoginRegistrationView
        signUpFields={signUpFields}
        signInFields={signInFields}
        addClass={addClass}
        setAddClass={setAddClass}
        handleChange={handleChange}
        handleSignInFieldsChange={handleSignInFieldsChange}
        handleSignInSubmit={handleSignInSubmit}
        handleSignUpSubmit={handleSignUpSubmit}
        setSignUpFields={setSignUpFields}
        signInErrorAlert={signInErrorAlert}
        signUpErrorAlert={signUpErrorAlert}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
      />
    </Modal>
  )
}

export default LoginRegistration;