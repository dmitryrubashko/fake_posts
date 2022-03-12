import {GET_POSTS, POSTS_ERROR} from '../types';

import Api from "../commonComponents/api";

const dataPosts = Api.get(`/posts`);

export const getPosts = () => dispatch => {

  dataPosts.then((response) => {
    dispatch ({
      type: GET_POSTS,
      payload: response.data,
    })
  })
    .catch((error) => {
      dispatch ({
        type: POSTS_ERROR,
        payload: error,
      })
    });
}