import { OPEN_ROOM } from "../actionTypes/roomActionTypes";
import * as socketConnection from '../realTimeCommunication/socketConnection';

export const createRoomHandler = () => (dispatch) => {
    dispatch({
        type: OPEN_ROOM
    });

    socketConnection.createRoomHandler();
}