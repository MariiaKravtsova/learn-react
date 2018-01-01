import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from '../types'
import axios from 'axios'

export function fetchPosts() {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts?key=quiet1234`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(`http://reduxblog.herokuapp.com/api/posts?key=quiet1234`, values)
    .then(() => callback())
  
    return {
      type: CREATE_POST,
      payload: request
    }
}

export function fetchPost(id) {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts/${id}?key=quiet1234`)
  
    return {
      type: FETCH_POST,
      payload: request
    }
}

export function deletePost(id, callback) {
  const request = axios.delete(`http://reduxblog.herokuapp.com/api/posts/${id}?key=quiet1234`)
    .then(() => callback())

    return {
      type: DELETE_POST,
      payload: id
    }
}