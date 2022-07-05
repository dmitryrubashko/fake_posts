import { GET_COMMENTS } from "../types";

const CommentsActionCreator = (payload) => {
  return {
    type: GET_COMMENTS,
    payload,
  };
};

export default CommentsActionCreator;
