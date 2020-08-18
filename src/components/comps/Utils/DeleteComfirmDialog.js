import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ handleClose, open, onConfirm }) {

  const handleConfirm = () => {
    onConfirm()
    return handleClose()
  }

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Really Delete This Game?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please be patient. You can not reverse this action
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleConfirm} 
          >
            Confirm
          </Button>
          <Button 
            color="primary" 
            autoFocus
            variant="contained"
            onClick={handleClose}
          >
            Disgard
          </Button>
        </DialogActions>
      </Dialog>
  );
}
