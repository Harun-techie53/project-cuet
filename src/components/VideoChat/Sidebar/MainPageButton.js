import React from "react";
import {Button, Tooltip} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";

const MainPageButton = () => {
  return (
    <Tooltip title='All Rooms'>
        <Button
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
        <GroupsIcon />
        </Button>
    </Tooltip>
  );
};

export default MainPageButton;
