import React from 'react'
import { styled } from "@mui/system";
import Room from './Room/Room';
import { useSelector } from 'react-redux';

const MainContainer = styled("div")({
    flexGrow: 1,
    backgroundColor: "#36393f",
    display: "flex",
  });

const Container = () => {
  const isUserRoomCreator = useSelector((state) => state.roomReducer.isUserRoomCreator);
  return (
    <MainContainer>
      { isUserRoomCreator && <Room/> }
    </MainContainer>
  )
}

export default Container