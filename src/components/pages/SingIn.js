import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useCheckAuth from '../../hooks/useCheckAuth'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const authenticated = useCheckAuth()
  const history = useHistory()
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()
  const [authResult, setAuthResult] = useState(1)

  useEffect(() => {
    if(!!authenticated)
      return history.push('/dashboard')
  }, [authenticated])

  const onSubmit = ({ password }) => actions.signIn(password, dispatch, result => setAuthResult(result))

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          You must enter passcode to enter to dashboard
        </Typography>
        
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          { !authResult 
            && <Alert severity="error">
                You entered invalid password!
              </Alert>
          }
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            inputRef={register({ required: true })}
          />
          { errors.password && <Typography variant="body2" color="secondary">You must input password</Typography> }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
