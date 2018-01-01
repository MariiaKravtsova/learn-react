import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../types'
import { mapKeys, omit } from 'lodash'

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id')
    case FETCH_POST:
      const post = action.payload.data
      return { ...state, [post.id]: post }
    case DELETE_POST:
      return omit(state, action.payload)
    default:
      return state
  }
}