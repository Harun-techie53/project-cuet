import React, {Fragment, useState} from 'react';
import VideoChat from '../components/VideoChat2';
import { Button } from '@mui/material';

// import Sidebar from '../components/VideoChat/Sidebar/Sidebar';
// import Container from '../components/VideoChat/Container/Container';
// import { getAuthToken } from '../utils';

// const Wrapper = styled("div")({
//   width: "100%",
//   height: "100vh",
//   display: "flex",
// });

const VideoChatScreen = () => {
  const [inCall, setInCall] = useState(false);
  
  return (
      <Fragment>
        {
          inCall ? (
            <VideoChat setInCall={setInCall} />
          ) : (
          <Button color='primary' onClick={() => setInCall(true)}>
            Join Call
          </Button>
          )
        }
      </Fragment>
  );
};

export default VideoChatScreen;
