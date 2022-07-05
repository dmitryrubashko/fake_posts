import { GET_POSTS, POSTS_ERROR } from "../PostPageReducer/actions/types";

const initialState = {
  posts: [],
  isLoading: true,
};

const MainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case POSTS_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default MainPageReducer;
