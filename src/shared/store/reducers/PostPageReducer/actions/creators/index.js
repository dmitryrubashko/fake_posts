import { GET_POSTS } from "../types";

const PostsActionCreator = (payload) => {
  return {
    type: GET_POSTS,
    payload,
  };
};

export default PostsActionCreator;
