import { GET_USERS, USERS_ERROR } from "../types";
import GetData from "../commonComponents/api";

export const getUsers = () => (dispatch) => {
  GetData.dataUsers()
    .then((response) => {
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: USERS_ERROR,
        payload: error,
      });
    });
};
