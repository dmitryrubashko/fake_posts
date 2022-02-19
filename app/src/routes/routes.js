import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";

import {ROUTES} from "./routesNames";

import MainPageContainer from "../pages/mainPage/container/mainPageContainer";
import AllUsersPageContainer from "../pages/allUsersPage/container/allUsersPageContainer";
import UserPageContainer from "../pages/userPage/container/userPageContainer";
import PostPageContainer from "../pages/postPage/container/PostPageContainer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path={ROUTES.MAIN} component={MainPageContainer}/>
      <Route exact path={ROUTES.USERS} component={AllUsersPageContainer}/>
      <Route exact path={ROUTES.USER} component={UserPageContainer}/>
      <Route path={ROUTES.POST} component={PostPageContainer}/>
      <Redirect path='*' to {ROUTES.MAIN}/>
    </BrowserRouter>
  );
};

export default Routes;
