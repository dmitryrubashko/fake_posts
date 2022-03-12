import {GET_USERS, USERS_ERROR} from '../types';

import Api from "../commonComponents/api";

const dataUsers = Api.get(`/users`);

export const getUsers = () => dispatch => {

  dataUsers.then((response) => {
    dispatch ({
      type: GET_USERS,
      payload: response.data,
    })
  })
    .catch((error) => {
      dispatch ({
        type: USERS_ERROR,
        payload: error,
      })
    });
}