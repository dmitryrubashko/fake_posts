import { GET_POSTS, POSTS_ERROR } from "../PostPageReducer/actions/types";
import { GET_USERS, USERS_ERROR } from "../AllUsersPageReducer/actions/types";

const initialState = {
  posts: [],
  isLoadingPosts: true,
  users: [],
  isLoadingUsers: true,
};

const UserPageReducer = (state = initialState, action) => {
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
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoadingUsers: false,
      };
    case USERS_ERROR:
      return {
        isLoadingUsers: false,
        usersError: action.payload,
      };
    default:
      return state;
  }
};
export default UserPageReducer;
