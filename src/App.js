import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import CourseEnrollScreen from './screens/CourseEnrollScreen';
import AboutScreen from './screens/AboutScreen';
import DashboardScreen from './screens/DashboardScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';
import './App.css';
import VideoChatScreen from './screens/VideoChatScreen';
import AllResearchesScreen from './screens/AllResearchesScreen';
import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from '@mui/material';
import AuthSnackbar from './components/Snackbars/AuthSnackbar';
import {getAuthToken} from './utils';
import {fetchAuthUserHandler} from './actions/authAction';
import {handleTheClickEvent} from './actions/clickEventAction';
import {
  SIGN_IN_EVENT,
  SIGN_OUT_EVENT,
  SIGN_UP_EVENT
} from './actionTypes/clickEventActionTypes';
import ResearchScreen from './screens/ResearchScreen';

function App() {
  const dispatch = useDispatch();
  const authToken = getAuthToken();
  // const {fetchCurrentUser, authSuccess, setAuthSuccess, authToken} = useContext(AuthContext);

  // const {isLoggedIn, isSignedUp, isLoggedOut} = authSuccess;
  const clickEvents = useSelector((state) => state.clickEventReducer);
  const isSignedUp = clickEvents.isSignedUp;
  const isSignedIn = clickEvents.isSignedIn;
  const isSignedOut = clickEvents.isSignedOut;

  const authState = useSelector((state) => state.authReducer);
  const authUserDetails = authState.authUserDetails ?? null;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    if(isSignedIn) dispatch(handleTheClickEvent(SIGN_IN_EVENT));

    if(isSignedUp) dispatch(handleTheClickEvent(SIGN_UP_EVENT));

    if(isSignedOut) dispatch(handleTheClickEvent(SIGN_OUT_EVENT));
  }

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  useEffect(() => {
    dispatch(fetchAuthUserHandler());
  }, [authToken]);
  
  return (
    <div className='relative'>
      <Header/>
      <main>
        <Routes>
          <Route path='/dashboard' element={<DashboardScreen/>} />
          <Route path='/researches' element={<AllResearchesScreen/>} />
          <Route path='/research/:researchId' element={<ResearchScreen/>} />
          <Route path='/videoChat' element={<VideoChatScreen/>} />
          <Route path='/contact' element={<ContactScreen/>} />
          <Route path="/about" element={<AboutScreen/>} />
          <Route path="/courses" element={<CourseEnrollScreen/>} />
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </main>
      <AuthSnackbar
        handleClose={handleClose}
        action={action}
        isSignedIn={isSignedIn}
        isSignedUp={isSignedUp}
        isSignedOut={isSignedOut}
      />
    </div>
  );
}

export default App;
