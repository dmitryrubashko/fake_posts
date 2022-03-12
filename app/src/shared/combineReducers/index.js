import {combineReducers} from 'redux';
import AllUsersPageReducer from "../../pages/allUsersPage/reducers";
import MainPageReducer from "../../pages/mainPage/reducers";
import PostPageReducer from "../../pages/postPage/reducers";
import UserPageReducer from "../../pages/userPage/reducers";

export default combineReducers({
  allUsersPageList: AllUsersPageReducer,
  mainPageList: MainPageReducer,
  postPageList: PostPageReducer,
  userPageList: UserPageReducer,
})