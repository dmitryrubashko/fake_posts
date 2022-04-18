import { COMMENTS_ERROR } from "../actions/types";
import CommentsActionCreator from "../actions/creators";
import GetData from "../../../../api";

export const getComments = () => (dispatch) => {
  GetData.dataComments()
    .then((response) => {
      dispatch(CommentsActionCreator(response.data));
    })
    .catch((error) => {
      dispatch({
        type: COMMENTS_ERROR,
        payload: error,
      });
    });
};
