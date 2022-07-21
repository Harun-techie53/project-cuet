import { OPEN_ROOM } from "../actionTypes/roomActionTypes";

const initialState = {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    localStream: null,
    remoteStreams: [],
    audioOnly: false,
    activeRooms: []
}

const roomReducer = (state=initialState, action) => {
    switch(action.type) {
        case OPEN_ROOM:
            return {
                ...state,
                isUserInRoom: true,
                isUserRoomCreator: true
            }
        default:
            return state;
    }
}

export default roomReducer;