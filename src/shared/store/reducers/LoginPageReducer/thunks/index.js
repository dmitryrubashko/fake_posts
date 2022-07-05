import { GET_AUTH } from "../actions/types";

export const getAuth = (isAuth) => {
  return (dispatch) => {
    dispatch({
      type: GET_AUTH,
      payload: {
        isAuth: isAuth,
      },
    });
  };
};
