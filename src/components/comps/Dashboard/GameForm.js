import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import GameOutlinedIcon from '@material-ui/icons/GamesOutlined'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import actions from '../../../redux/actions'





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: 'none'
  },
  label: {
    width: '100%'
  }
}));

export default function GameForm({ target }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  if(!target) {
    target = {
      _id: null,
      title: '',
      tags: '',
      companies: '',
      languages: '',
      detail: '',
      original_size: ''
    }
  }

  const onFormSubmit = data => {
    var formData = new FormData()
    formData.append('id', data.id)
    formData.append('title', data.title)
    formData.append('tags', data.tags)
    formData.append('companies', data.companies)
    formData.append('languages', data.languages)
    formData.append('original_size', data.original_size)
    formData.append('detail', data.detail)
    formData.append('image', data.image[0])
    formData.append('file', data.file[0])
    
    return actions.submitRepackData(formData, dispatch)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GameOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Please specify data
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onFormSubmit)}>
          <input 
            type="hidden" 
            name="id" 
            id="id" 
            autoComplete="id" 
            defaultValue={target._id} 
            ref={register}
          />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                defaultValue={target.title}
                inputRef={register({ required: true })}
              />
              {/* { errors.title && <Typography variant="body2" color="secondary">Title is required data</Typography> } */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tags"
                label="Tags"
                name="tags"
                autoComplete="tags"
                defaultValue={target.tags}
                inputRef={register({ required: true })}
              />
              {/* { errors.tags && <Typography variant="body2" color="secondary">Tags is required data</Typography> } */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="companies"
                label="Companies"
                name="companies"
                autoComplete="companies"
                defaultValue={target.companies}
                inputRef={register({ required: true })}
              />
              {/* { errors.companies && <Typography variant="body2" color="secondary">Companies is required data</Typography> } */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="languages"
                label="Languages"
                id="languages"
                autoComplete="languages"
                defaultValue={target.languages}
                inputRef={register({ required: true })}
              />
              {/* { errors.languages && <Typography variant="body2" color="secondary">Languages is required data</Typography> } */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                name="original_size"
                label="Original Size (GB)"
                id="original_size"
                autoComplete="original_size"
                defaultValue={target.original_size}
                inputRef={register({ required: true })}
              />
              {/* { errors.original_size && <Typography variant="body2" color="secondary">Orignal Size is required data</Typography> } */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                name="detail"
                id="detail"
                label="Detail"
                defaultValue={target.detail}
                inputRef={register({ required: true })}
              />
              {/* { errors.detail && <Typography variant="body2" color="secondary">Detail is required data</Typography> } */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                accept="image/*"
                className={classes.input}
                id="image"
                type="file"
                name="image"
                ref={register({ required: !target._id })}
              />
              <label htmlFor="image" className={classes.label}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  component="span"
                  fullWidth
                >
                  Select Image
                </Button>
              </label>
              { errors.image && <Typography variant="body2" color="secondary" className={classes.label}>You must upload a screenshot image</Typography> }
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                accept="application/zip"
                className={classes.input}
                id="file"
                type="file"
                name="file"
                ref={register({ required: !target._id })}
              />
              <label htmlFor="file" className={classes.label}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  component="span"
                  fullWidth
                >
                  Select File
                </Button>
              </label>
              { errors.file && <Typography variant="body2" color="secondary" className={classes.label}>You must upload the repacked game</Typography> }
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Confirm
          </Button>
        </form>
      </div>
    </Container>
  );
}
