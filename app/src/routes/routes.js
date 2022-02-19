import {Switch, Route, Redirect} from "react-router-dom";

import {ROUTES} from "./routesNames";

import MainPageContainer from "../pages/mainPage/container/mainPageContainer";
import AllUsersPageContainer from "../pages/allUsersPage/container/allUsersPageContainer";
import UserPageContainer from "../pages/userPage/container/userPageContainer";
import PostPageContainer from "../pages/postPage/container/PostPageContainer";
import LoginPageContainer from "../pages/loginPage/container/loginPageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MAIN} component={MainPageContainer}/>
      <Route exact path={ROUTES.USERS} component={AllUsersPageContainer}/>
      <Route exact path={ROUTES.USER} component={UserPageContainer}/>
      <Route path={ROUTES.POST} component={PostPageContainer}/>
      <Route path={ROUTES.LOGIN} component={LoginPageContainer}/>
      <Redirect path='*' to={ROUTES.MAIN}/>
    </Switch>
  );
};

export default Routes;
