import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import GameForm from './GameForm'

export default function GameFormDialog({ open, handleClose, target }) {
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <GameForm  
        target={target}
        closeDialog={handleClose}
      />
    </Dialog>
  );
}
