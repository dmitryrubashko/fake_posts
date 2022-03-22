import { GET_AUTH } from "../../../shared/types";

const initialState = {
  isAuth: false,
};

const LoginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      }
    default:
      return state;
  }
};
export default LoginPageReducer;
