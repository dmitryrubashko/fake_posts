import { combineReducers } from "redux";

import AllUsersPageReducer from "../../pages/allUsersPage/reducers";
import MainPageReducer from "../../pages/mainPage/reducers";
import PostPageReducer from "../../pages/postPage/reducers";
import UserPageReducer from "../../pages/userPage/reducers";
import LoginPageReducer from "../../pages/loginPage/reducers"

export default combineReducers({
  allUsersPageList: AllUsersPageReducer,
  mainPageList: MainPageReducer,
  postPageList: PostPageReducer,
  userPageList: UserPageReducer,
  loginPageList: LoginPageReducer,
});
