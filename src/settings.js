import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

const APP_ID = 'd7cc4be0a6fc440c95df7473c9995111';
const TOKEN = '006d7cc4be0a6fc440c95df7473c9995111IADak6M9+RB5n/N7opjdxaUS9ITv27VQgNMC8J2F31elj2TNKL8AAAAAEACOhaHH4WfiYgEAAQDhZ+Ji';

export const config = {
    mode: "rtc", 
    codec: "vp8",
    appId: APP_ID,
    appToken: TOKEN 
}

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = 'main';