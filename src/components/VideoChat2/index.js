import React, {Fragment, useEffect, useState} from 'react';
import * as agoraSettings from '../../settings';
import Controls from './Controls';
import Videos from './Videos';
import { Grid } from '@mui/material';
import AgoraVideo from './AgoraVideo';

const VideoChat = ({ setInCall }) => {
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = agoraSettings.useClient();
  const {ready, tracks} = agoraSettings.useMicrophoneAndCameraTracks();
  const channelName = agoraSettings.channelName;

  const {appId, appToken} = agoraSettings.config;

  useEffect(() => {
    let init = async (name) => {
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if(mediaType === 'video') {
          setUsers((prevUsers) => [...prevUsers, users]);
        }

        if(mediaType === 'audio') {
          user.audioTrack.play();
        }
      });

      client.on('user-unpublished', (user, mediaType) => {
        if(mediaType === 'audio') {
          if(user.audioTrack) user.audioTrack.stop();
  
          if(mediaType === 'video') {
            setUsers((prevUsers) => {
              return prevUsers.filter((User) => User.uid !== user.uid);
            });
          }
        }
      });
  
      client.on('user-left', (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });
  
      try {
        await client.join(appId, name, appToken, null);
      } catch (error) {
        console.log('error occured ', error);
      }

      if(tracks) await client.publish([tracks[0], tracks[1]]);

      setStart(true);
    }

    if(ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [client, ready, channelName, tracks]);
  
  return (
    <Fragment>
        <Grid container direction='column' style={{ height: '100%' }}>
          <Grid item style={{ height: '5%' }}> 
            {
              ready && tracks && (
                <Controls 
                  setInCall={setInCall}
                  setStart={setStart}
                  tracks={tracks}
                />
              )
            }
          </Grid>
          <Grid item style={{ height: '95%' }}>
            {
              start && tracks && (
                <Videos  
                  users={users}
                  tracks={tracks}
                />
              )
            }
          </Grid>
        </Grid>
    </Fragment>
  )
}

export default VideoChat