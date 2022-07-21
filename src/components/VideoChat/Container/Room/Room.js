import React, { useState } from 'react'
import { styled } from '@mui/system';
import RoomButtons from './RoomButtons/RoomButtons';
import VideosContainer from './VideosContainer/VideosContainer';


const MainContainer = styled('div')({
    position: 'absolute',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f1226'
});

const fullScreenRoomStyled = {
    width: '95%',
    height: '100vh'
}

const minimizedScreenRoomStyled = {
    bottom: '0px',
    right: '0px',
    width: '30%',
    height: '40vh'
}

const Room = () => {
    const [isRoomMinimized, setIsRoomMinimized] = useState(true);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [isAudioEnabled, setIsAudioEnabled] = useState(true);

    const resizeRoomScreenHandler = () => {
        setIsRoomMinimized(!isRoomMinimized);
    }

    const audioHandler = () => {
        setIsAudioEnabled(!isAudioEnabled);
    }

    const videoHandler = () => {
        setIsVideoEnabled(!isVideoEnabled);
    }
  return (
    <MainContainer
        style={ isRoomMinimized ? minimizedScreenRoomStyled : fullScreenRoomStyled }
    >
        <VideosContainer/>
        <RoomButtons
            isRoomMinimized={isRoomMinimized}
            resizeRoomScreenHandler={resizeRoomScreenHandler}
            isVideoEnabled={isVideoEnabled}
            isAudioEnabled={isAudioEnabled}
            audioHandler={audioHandler}
            videoHandler={videoHandler}
        />
    </MainContainer>
  )
}

export default Room