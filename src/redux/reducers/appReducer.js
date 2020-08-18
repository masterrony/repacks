import types from '../actions/types'
import { ServerUrl, ImageUrl, DownloadUrl } from '../../config'

const initialState = {
  repacks : undefined,
  repack: {},
  authenticated: 0,
  serverUrl: ServerUrl,
  imageUrl: ImageUrl,
  downloadUrl: DownloadUrl,
  searchMode: 0,
  actionResult: undefined
}

export default (state = initialState , action={}) => {
  switch (action.type) {
    case types.SET_REPACKS:
        return { ...state, repacks: action.payload }
    case types.SET_REPACK:
        return { ...state, repack: action.payload }
    case types.AUTH_USER:
        return { ...state, authenticated: 1 }
    case types.SET_SEARCH_MODE:
        return { ...state, searchMode: 1 }
    case types.SET_ACTION_RESULT:
        return { ...state, actionResult: action.payload}
    default:
      return state;
  }
}