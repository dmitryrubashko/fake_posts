import { GET_COMMENTS, COMMENTS_ERROR } from "../types";
import GetData from "../commonComponents/api";

export const getComments = () => (dispatch) => {
  GetData.dataComments()
    .then((response) => {
      dispatch({
        type: GET_COMMENTS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: COMMENTS_ERROR,
        payload: error,
      });
    });
};
