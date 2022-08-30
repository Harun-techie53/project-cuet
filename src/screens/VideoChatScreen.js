import React, { Fragment, useState } from 'react'
import VideoChat from '../components/VideoChat2'
import { Button } from '@mui/material'
import Footer from "../components/Footer";

// import Sidebar from '../components/VideoChat/Sidebar/Sidebar';
// import Container from '../components/VideoChat/Container/Container';
// import { getAuthToken } from '../utils';

// const Wrapper = styled("div")({
//   width: "100%",
//   height: "100vh",
//   display: "flex",
// });

const VideoChatScreen = () => {
  const [inCall, setInCall] = useState(false)
  return (
    <div className="my-5">
      <VideoChat setInCall={setInCall} />
    </div>
  )
}

export default VideoChatScreen
