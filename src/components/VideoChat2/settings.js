import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'
//d7cc4be0a6fc440c95df7473c9995111
const appId = 'd7cc4be0a6fc440c95df7473c9995111'
const token =
  '006d7cc4be0a6fc440c95df7473c9995111IAC40pueJE+m7q+crgxTXTSxw8BMLujVjGJMgTQw4Nq59dfYYSgAAAAAEACxI7THqwf6YgEAAQCrB/pi'

export const config = { mode: 'rtc', codec: 'vp8', appId: appId, token: token }
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const channelName = 'join'
