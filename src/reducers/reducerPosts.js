import { AT_POSTS } from '../actions/actionTypes';

export default function reducerPosts(state = [], action){

  switch(action.type){
    case AT_POSTS.READ_ALL :
        return action.payload;
    default:
      return state
  }
}
