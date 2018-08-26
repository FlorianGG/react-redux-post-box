import axios from 'axios';

import AT_POST from './actionTypes';

const END_POINT = 'http://localhost:8080';

export function readAllPost(){
  return  (dispatch) => {
    axios.get(`${END_POINT}/posts`).then((response) => {
      dispatch({
        type : AT_POST.readAllPost,
        payload: response.data
      })
    })
  }
}

