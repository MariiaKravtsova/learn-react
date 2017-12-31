import { FETCH_POSTS } from '../types'
import axios from 'axios'

export function fetchPosts() {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts?key=quiet1234`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}