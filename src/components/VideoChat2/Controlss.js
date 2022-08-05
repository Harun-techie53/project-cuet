import React, {useState, Fragment} from 'react';
import { IconButton, Tooltip, Grid } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useClient } from '../../settings';

const Controls = ({ 
    setInCall,
    setStart,
    tracks
}) => {
    const client = useClient();
    const [trackState, setTrackState] = useState({ video: true, audio: true });

    const muteHandler = async (mediaType) => {
        if(mediaType === 'audio') {
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((prevState) => {
                return {
                    ...prevState,
                    audio: !prevState.audio
                }
            });
        }

        if(mediaType === 'video') {
            await tracks[1].setEnabled(!trackState.video);
            setTrackState((prevState) => {
                return {
                    ...prevState,
                    video: !prevState.video
                }
            });
        }
    }

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setInCall(false);
    }
    return (
        <Fragment>
            <Grid container spacing={2} alignItems='center'>
                <Grid item>
                    <IconButton 
                        color={ trackState.audio ? 'primary' : 'secondary' }
                        onClick={() => muteHandler('audio')}
                    >
                        { trackState.audio ? <MicIcon/> : <MicOffIcon/> }
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        color={ trackState.audio ? 'primary' : 'secondary' }
                        onClick={() => muteHandler('video')} 
                    >
                        { trackState.video ? <VideocamIcon/> : <VideocamOffIcon/> }
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton 
                        color='secondary'
                        onClick={leaveChannel}
                    >
                        <ExitToAppIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Controls