import axios from 'axios'
import type from './types'
import { ApiUrl } from '../../config'
import types from './types'

const axInsRepack = axios.create({
  baseURL: `${ApiUrl}repack`
})

const axInsAuth = axios.create({
  baseURL: `${ApiUrl}auth`
})

const getRepacks = (dispatch, keyWord = null) => {
  dispatch({ type: types.SET_REPACKS, payload: undefined })
  axInsRepack.get(`/`, {
    params: { keyWord }
  })
  .then( ({data: { repacks }}) => dispatch({ type: type.SET_REPACKS, payload: repacks }))
  .catch(err => console.log(err))
}

const getRepack = (id, dispatch) => {
  axInsRepack.get(`/${id}`)
  .then( ({data: { repack }}) => dispatch({ type: type.SET_REPACK, payload: repack }))
  .catch(err => console.log(err))
}

const submitRepackData = (data, dispatch) => {
  axInsRepack.post(`/`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then( res => {
    if(!res.data.result)
      return setActionResult(dispatch, {
        statis: 'error',
        message: 'Oops, Something went wrong!'
      })

    setActionResult(dispatch, {
      statis: 'success',
      message: !data.get('id') ? 'Game added successfully!' : 'Change saved successfully!'
    })
    return getRepacks(dispatch)
  }).catch(err => console.log(err))
}

const deleteRepack = (target, dispatch) => {
  axInsRepack.delete('/', { 
    data: { target }
  })
  .then(({ data: { result } }) => {
    if(!result)
      return setActionResult(dispatch, {
        status: 'error',
        message: 'Oops, Something went wrong!'
      })

    setActionResult(dispatch, {
      status: 'success',
      message: 'Deleted successfully!'
    })
    return getRepacks(dispatch)
  }).catch(err => console.log(err))
}

const signIn = (password, dispatch, cb) => {
  axInsAuth({
    url: '/signin',
    method: 'post',
    data: { password }
  }).then( ({ data: { result } }) => {
    if(!!result)
      dispatch({ type: types.AUTH_USER })
    return cb(result)
  })
  .catch( err => console.log(err))
}

const setSearchMode = dispatch => dispatch({ type: types.SET_SEARCH_MODE })

const setActionResult = (dispatch, actionResult) => dispatch({ type: types.SET_ACTION_RESULT, payload: actionResult })

export default {
  getRepack, 
  getRepacks, 
  signIn, 
  submitRepackData, 
  deleteRepack, 
  setSearchMode,
  setActionResult
}