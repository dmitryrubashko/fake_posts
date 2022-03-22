import { GET_AUTH } from "../types";

export const getAuth = (isAuth) => {
  console.log(isAuth)
  return (dispatch) => {
    dispatch({
      type: "GET_AUTH",
      payload: {
        isAuth: isAuth,
      },
    });
  };
};


