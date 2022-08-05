import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'

const appId = 'cb594a754b444f8bb17cbd070dff5fbf'
const token =
  '006cb594a754b444f8bb17cbd070dff5fbfIABkLQ60oYoL6PgFnMFl1vlUxh1O3mocQRMZt0J28ssfkmM19B4AAAAAEACOhaHHC67uYgEAAQALru5i'

export const config = { mode: 'rtc', codec: 'vp8', appId: appId, token: token }
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const channelName = 'JOIN'
