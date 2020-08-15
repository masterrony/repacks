import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
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
