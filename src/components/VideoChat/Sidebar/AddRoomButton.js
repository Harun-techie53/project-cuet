import React from "react";
import {Button, Tooltip} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { createRoomHandler } from "../../../actions/roomAction";

const MainPageButton = () => {
    const dispatch = useDispatch();

    const handleCreateRoom = () => {
        dispatch(createRoomHandler());
    }
  return (
    <Tooltip title='Create Room'>
        <Button
            onClick={handleCreateRoom}
            style={{
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                margin: 0,
                padding: 0,
                minWidth: 0,
                marginTop: "10px",
                color: "white",
                backgroundColor: "#5865F2",
            }}
        >
            <AddIcon />
        </Button>
    </Tooltip>
  );
};

export default MainPageButton;
