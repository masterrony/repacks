import types from '../actions/types'
import { ServerUrl, ImageUrl, DownloadUrl } from '../../config'

const initialState = {
  repacks : [],
  repack: {},
  authenticated: 0,
  serverUrl: ServerUrl,
  imageUrl: ImageUrl,
  downloadUrl: DownloadUrl
}

export default (state = initialState , action={}) => {
  switch (action.type) {
    case types.SET_REPACKS:
        return { ...state, repacks: action.payload }
    case types.SET_REPACK:
        return { ...state, repack: action.payload }
    case types.AUTH_USER:
        return { ...state, authenticated: 1 }
    default:
      return state;
  }
}