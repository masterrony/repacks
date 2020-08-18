import React from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const BackDrop = ({ open }) => {
  const classes = useStyles()

  return <Backdrop open={open} className={classes.backdrop}>
    <CircularProgress color="inherit" />
  </Backdrop>
}

export default BackDrop