import { GET_AUTH } from "./actions/types";

const initialState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")),
};

const LoginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
};
export default LoginPageReducer;
