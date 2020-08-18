import React from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import actions from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'



const PopupNotify = () => {
  const dispatch = useDispatch()
  const actionResult =  useSelector(state => state.app.actionResult)
  const severity = !!actionResult ? actionResult.status : ''
  const message = !!actionResult ? `${severity.toUpperCase()}! ${actionResult.message}` : ''

  const handleClose = () => actions.setActionResult(dispatch, undefined)

  if(!actionResult || severity === 'pending')
    return <></>

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={!!actionResult}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert elevation={6} variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default PopupNotify