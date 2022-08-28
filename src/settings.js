import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

const APP_ID = 'd7cc4be0a6fc440c95df7473c9995111';
const TOKEN = '007eJxTYLhjHzTn0WxVqeDr05Y+c1Vpvxk9fW7S47siS8UezypclLZHgSHFPDnZJCnVINEsLdnExCDZ0jQlzdzE3DjZ0tLS1NDQ8L82d3JdLU+yU68WAyMUgvgsDFn5mXkMDADJgiEz';

export const config = {
    mode: "rtc", 
    codec: "vp8",
    appId: APP_ID,
    appToken: TOKEN 
}

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = 'join';