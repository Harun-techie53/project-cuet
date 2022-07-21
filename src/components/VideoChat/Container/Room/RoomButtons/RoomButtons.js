import React from 'react';
import { styled } from '@mui/system';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { IconButton, Tooltip } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const ResizeContainer = styled('div')({
    position: 'absolute',
    right: '10px'
});

const roomButton = {
    color: 'white'
}


const MainContainer = styled('div')({
    width: '100%',
    height: '18%',
    display: 'flex',
    alignItems: 'center',
    bottom: '15px',
    backgroundColor: '#4a5bb0',
    borderRadius: '8px 8px 0px 0px',
    justifyContent: 'space-evenly'
});


const RoomButtons = ({
    isRoomMinimized,
    resizeRoomScreenHandler,
    isVideoEnabled,
    isAudioEnabled,
    audioHandler,
    videoHandler
}) => {
  return (
    <MainContainer>
        <Tooltip title='Audio'>
            <IconButton 
                onClick={audioHandler}
                style={roomButton}
            >
                {
                    isAudioEnabled ? (
                        <MicIcon 
                            fontSize={ isRoomMinimized ? 'medium' : 'large' }
                        />
                    ) : (
                        <MicOffIcon
                            fontSize={ isRoomMinimized ? 'medium' : 'large' }
                        />
                    )
                }
            </IconButton>
        </Tooltip>
        <Tooltip title='Video'>
            <IconButton 
                onClick={videoHandler}
                style={roomButton}
            >
                {
                    isVideoEnabled ? (
                        <VideocamIcon
                            fontSize={ isRoomMinimized ? 'medium' : 'large' }
                        />
                    ) : (
                        <VideocamOffIcon
                            fontSize={ isRoomMinimized ? 'medium' : 'large' }
                        />
                    )
                }
            </IconButton>
        </Tooltip>
        <Tooltip title='Leave'>
            <IconButton style={roomButton}>
                <ExitToAppIcon fontSize={ isRoomMinimized ? 'medium' : 'large' }/>
            </IconButton>
        </Tooltip>
        <Tooltip title={ isRoomMinimized ? 'Expand Screen' : 'Minimize Screen' }>
            <IconButton style={{ color: 'white' }} onClick={resizeRoomScreenHandler}>
                { isRoomMinimized ? <OpenInFullIcon/> : <CloseFullscreenIcon/> }
            </IconButton>
        </Tooltip>
    </MainContainer>
  )
}

export default RoomButtons