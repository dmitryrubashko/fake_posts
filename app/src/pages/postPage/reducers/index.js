import {
  GET_POSTS,
  POSTS_ERROR,
  GET_COMMENTS,
  COMMENTS_ERROR,
} from "../../../shared/types";

const initialState = {
  posts: [],
  isLoadingPosts: true,
  comments: [],
  isLoadingComments: true,
};

const PostPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoadingPosts: false,
      };
    case POSTS_ERROR:
      return {
        isLoadingPosts: false,
        postsError: action.payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isLoadingComments: false,
      };
    case COMMENTS_ERROR:
      return {
        isLoadingComments: false,
        commentsError: action.payload,
      };
    default:
      return state;
  }
};
export default PostPageReducer;
