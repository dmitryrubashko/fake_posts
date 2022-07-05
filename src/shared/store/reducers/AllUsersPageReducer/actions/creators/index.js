import { GET_USERS } from "../types";

const UsersActionCreator = (payload) => {
  return {
    type: GET_USERS,
    payload,
  };
};

export default UsersActionCreator;
