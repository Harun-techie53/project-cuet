import React from 'react'
import { Snackbar, Alert } from '@mui/material';

const AuthSnackbar = ({
    handleClose,
    action,
    isSignedIn,
    isSignedOut,
    isSignedUp
}) => {
  return (
    <Snackbar
        open={isSignedIn && isSignedIn || isSignedUp && isSignedUp || isSignedOut && isSignedOut}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
    >
        <Alert 
          onClose={handleClose}
          severity={
            isSignedOut ? 'error' : 'success'
          }
          variant='filled'
          sx={{ width: '100%' }}
        >
          { 
            isSignedIn && 'Successfully Logged In' ||
            isSignedUp && 'Successfully Signed Up' ||
            isSignedOut && 'Successfully Logged Out'
          }
        </Alert>
    </Snackbar>
  )
}

export default AuthSnackbar