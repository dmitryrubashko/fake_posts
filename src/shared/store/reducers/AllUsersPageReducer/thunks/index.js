import { USERS_ERROR } from "../actions/types";
import UsersActionCreator from "../actions/creators";

import GetData from "../../../../api";

export const getUsers = () => (dispatch) => {
  GetData.dataUsers()
    .then((response) => {
      dispatch(UsersActionCreator(response.data));
    })
    .catch((error) => {
      dispatch({
        type: USERS_ERROR,
        payload: error,
      });
    });
};
