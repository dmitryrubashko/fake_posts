import { combineReducers } from "redux";

import AllUsersPageReducer from "./AllUsersPageReducer";
import MainPageReducer from "./MainPageReducer";
import PostPageReducer from "./PostPageReducer";
import UserPageReducer from "./UserPageReducer";
import LoginPageReducer from "./LoginPageReducer";

export default combineReducers({
  allUsersPageList: AllUsersPageReducer,
  mainPageList: MainPageReducer,
  postPageList: PostPageReducer,
  userPageList: UserPageReducer,
  loginPageList: LoginPageReducer,
});
