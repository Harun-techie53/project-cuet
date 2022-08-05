import { useState } from 'react'
import { Button } from '@material-ui/core'
import VideoCall from './VideoCall'

function AgoraVideo () {
  const [inCall, setInCall] = useState(false)

  return (
    <div className='App' style={{ height: '100%' }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant='contained'
          color='primary'
          onClick={() => setInCall(true)}
        >
          Join Calls
        </Button>
      )}
    </div>
  )
}

export default AgoraVideo
