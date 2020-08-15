import axios from 'axios'
import type from './types'
import { ApiUrl } from '../../config'
import types from './types'

const axInsRepack = axios.create({
  baseURL: `${ApiUrl}repack`,
  timeout: 10000
})

const axInsAuth = axios.create({
  baseURL: `${ApiUrl}auth`,
  timeout: 10000
})

const getRepacks = dispatch => {
  axInsRepack.get('/')
  .then( ({data: { repacks }}) => dispatch({ type: type.SET_REPACKS, payload: repacks }))
  .catch(err => console.log(err))
}

const getRepack = (id, dispatch) => {
  axInsRepack.get(`/${id}`)
  .then( ({data: { repack }}) => dispatch({ type: type.SET_REPACK, payload: repack }))
  .catch(err => console.log(err))
}

const submitRepackData = (data, dispatch) => {
  console.log(data)
  axInsRepack.post(`/`, data)
    .then(res => {
      console.log(res)
    }).catch(err => console.log(err))
}

const deleteRepack = (target, dispatch) => {
  axInsRepack.delete('/', { target })
    .then(res => {
      console.log(res)
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

export default {
  getRepack, getRepacks, signIn, submitRepackData, deleteRepack
}