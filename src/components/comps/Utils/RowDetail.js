import React from 'react'
import { Typography, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  bold: {
    fontWeight: 'bold'
  },
  leftPadding: {
    paddingLeft: theme.spacing(1)
  }
}))



const RowDetail = ({ data: { tags, companies, languages, detail } }) => {
  const classes = useStyles()
  
  return <Container className={classes.root}>
    <Typography variant="subtitle2" gutterBottom>
      <span className={classes.bold}>Detail:</span>
    </Typography>
    <Typography variant="body2" className={classes.leftPadding} gutterBottom>
      {detail}
    </Typography>
    <Typography variant="body2" gutterBottom>
      <span className={classes.bold}>Tags: </span>{tags}, 
      <span className={classes.bold}> Companies: </span>{companies},
      <span className={classes.bold}> Languages: </span>{languages},
    </Typography>
  </Container>
}

export default RowDetail