import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, IconButton } from '@mui/material';
import {makeStyles} from '@mui/styles';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

import { SocketContext } from '../../contexts/socketContext/ContextProvider';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '600px',
    // [theme.breakpoints.down('xs')]: {
    //   width: '300px',
    // },
  },
  gridContainer: {
    justifyContent: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column',
    // },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { 
    name, 
    callAccepted, 
    myVideo, 
    userVideo, 
    callEnded, 
    stream, 
    call, 
    isVideoOn,
    setIsVideoOn,
    isAudioOn,
    setIsAudioOn 
  } = useContext(SocketContext);
  
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={10} md={10}>
            <Typography variant="h4" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay />
          </Grid>
          <div>
            {
              isVideoOn ? (
                <IconButton onClick={() => setIsVideoOn(!isVideoOn)}>
                  <VideocamIcon sx={{ fontSize: 'large' }}/>
                </IconButton>
              ) : (
                <IconButton onClick={() => setIsVideoOn(!isVideoOn)}>
                  <VideocamOffIcon sx={{ fontSize: 'large' }} />
                </IconButton>
              )
            }
          </div>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={10} md={10}>
            <Typography variant="h4" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
