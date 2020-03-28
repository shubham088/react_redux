import { combineReducers } from 'redux'
import fetchPostReducer from './fetchPosts'
import addPostReducer from './addPosts'

const rootReducers = combineReducers(
  {
  all_posts : fetchPostReducer,
  recent : addPostReducer
})

export default rootReducers;
