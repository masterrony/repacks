import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}))

const TableSubHeader = ({ onAddBtnClick, onSearchFieldConfirmed }) => {
  const classes = useStyles()

  return (
    <div>
      {/* <TextField label="search" onKeyUp={onSearchFieldConfirmed} /> */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={onAddBtnClick}
      >Add Game</Button>
    </div>
  )
}

export default TableSubHeader