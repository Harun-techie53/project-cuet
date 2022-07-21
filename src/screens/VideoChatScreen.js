import React from 'react';
import { Typography, AppBar } from '@mui/material';
import { styled } from "@mui/system";

import Sidebar from '../components/VideoChat/Sidebar/Sidebar';
import Container from '../components/VideoChat/Container/Container';

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const VideoChatScreen = () => {
  return (
      <Wrapper>
        <Sidebar/>
        <Container/>
      </Wrapper>
  );
};

export default VideoChatScreen;
