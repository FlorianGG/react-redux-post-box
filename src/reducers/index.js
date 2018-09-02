import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import reducerActivePost from './reducerActivePost';
import reducerPosts from './reducerPosts';

const rootReducer = combineReducers({
  posts: reducerPosts,
  activePost: reducerActivePost,
  form: reducerForm,
})

export default rootReducer
