import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "./routesNames";
import MainPageContainer from "../../pages/mainPage/containers/MainPageContainer";
import AllUsersPageContainer from "../../pages/allUsersPage/containers/AllUsersPageContainer";
import UserPageContainer from "../../pages/userPage/containers/UserPageContainer";
import PostPageContainer from "../../pages/postPage/containers/PostPageContainer";
import LoginPageContainer from "../../pages/loginPage/containers/LoginPageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MAIN_PAGE} component={MainPageContainer} />
      <Route exact path={ROUTES.USERS_PAGE} component={AllUsersPageContainer} />
      <Route exact path={ROUTES.USER_PAGE} component={UserPageContainer} />
      <Route path={ROUTES.POST_PAGE} component={PostPageContainer} />
      <Route path={ROUTES.LOGIN_PAGE} component={LoginPageContainer} />
      <Redirect path="*" to={ROUTES.LOGIN_PAGE} />
    </Switch>
  );
};

export default Routes;
