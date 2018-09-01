import { combineReducers } from 'redux';

import reducerActivePost from './reducerActivePost';
import reducerPosts from './reducerPosts';

const rootReducer = combineReducers({
  posts: reducerPosts,
  activePost: reducerActivePost,
})

export default rootReducer
