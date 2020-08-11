import React, { useContext } from 'react'
import { Alert } from '@material-ui/lab'
import { ToastProps } from '../helpers/types'
import { ToastContext } from '../helpers/contexts'
import { Snackbar, Slide } from '@material-ui/core'


const Toast = ({ type = "error", message, open, duration = 5000 }: ToastProps) => {
  const { toggleToast } = useContext(ToastContext)

  return (
    <Snackbar
      open={open}
      TransitionComponent={Slide}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={duration}
      onClose={(_, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        toggleToast({ open: false, message: null })
      }}>
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  )
}


export default Toast