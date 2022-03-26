import {GET_POSTS, POSTS_ERROR} from '../types';
import GetData from "../api";

export const getPosts = () => dispatch => {

  GetData.dataPosts()
    .then((response) => {
      dispatch({
        type: GET_POSTS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: POSTS_ERROR,
        payload: error,
      });
    });
}