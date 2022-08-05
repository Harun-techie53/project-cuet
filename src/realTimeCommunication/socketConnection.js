import io from 'socket.io-client';
import {getAuthToken} from '../utils';

let socket = null;

const authToken = getAuthToken();

socket = io('http://localhost:5000', {
    // auth: {
    //     authToken
    // },
    reconnect: true,
    transports: ['websocket']
});
export const defineSocket = () =>  socket 

export const connectWithSocketServer = () => {
    socket.on('connection', () => {
        console.log('Socket client is connected with socket server');
        console.log(socket.id);
    });

    socket.on('room-create', (data) => {
        console.log('Room Details ', data);
    });
}

export const createRoomHandler = () => {
    socket.emit('room-create');
}