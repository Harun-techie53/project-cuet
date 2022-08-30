import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'
//d7cc4be0a6fc440c95df7473c9995111
const appId = 'd7cc4be0a6fc440c95df7473c9995111'
const token =
  '007eJxTYGC5qHpwivcNMUnJf2qSFSmX//+/6eDCm/1eQLvXqnOSwhwFhhTz5GSTpFSDRLO0ZBMTg2RL05Q0cxNz42RLS0tTQ0NDsUs8yVOU+ZJbu98wMEIhiM/CkJWfmcfAAADshh6n'

export const config = { mode: 'rtc', codec: 'vp8', appId: appId, token: token }
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const channelName = 'join'
