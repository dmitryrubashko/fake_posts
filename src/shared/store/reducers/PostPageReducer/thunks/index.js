import { POSTS_ERROR } from "../actions/types";
import PostsActionCreator from "../actions/creators";
import GetData from "../../../../api";

export const getPosts = () => (dispatch) => {
  GetData.dataPosts()
    .then((response) => {
      dispatch(PostsActionCreator(response.data));
    })
    .catch((error) => {
      dispatch({
        type: POSTS_ERROR,
        payload: error,
      });
    });
};
