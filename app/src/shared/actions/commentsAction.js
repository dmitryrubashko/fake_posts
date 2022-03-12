import {GET_COMMENTS, COMMENTS_ERROR} from '../types';

import Api from "../commonComponents/api";

const dataComments = Api.get(`/comments`);

export const getComments = () => dispatch => {

  dataComments.then((response) => {
    dispatch ({
      type: GET_COMMENTS,
      payload: response.data,
    })
  })
    .catch((error) => {
      dispatch ({
      type: COMMENTS_ERROR,
      payload: error,
    })
    });
}
