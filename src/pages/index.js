import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "../shared/routes/routesNames";
import PrivateRoute from "../shared/routes/PrivateRoutes/privateRoutes";
import MainPageContainer from "./mainPage/containers/MainPageContainer";
import AllUsersPageContainer from "./allUsersPage/containers/AllUsersPageContainer";
import UserPageContainer from "./userPage/containers/UserPageContainer";
import PostPageContainer from "./postPage/containers/PostPageContainer";
import LoginPageContainer from "./loginPage/containers/LoginPageContainer";
import SignupPageContainer from "./signupPage/containers/SignupPageContainer";
import ErrorPageContainer from "./errorPage/containers/ErrorPageContainer";

const Pages = () => {
  return (
    <Switch>
      <Route path={ROUTES.ERROR_PAGE} component={ErrorPageContainer} />
      <PrivateRoute
        exact
        path={ROUTES.MAIN_PAGE}
        component={MainPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.USERS_PAGE}
        component={AllUsersPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.USER_PAGE}
        component={UserPageContainer}
      />
      <PrivateRoute path={ROUTES.POST_PAGE} component={PostPageContainer} />
      <Route path={ROUTES.SIGNUP_PAGE} component={SignupPageContainer} />
      <Route path={ROUTES.LOGIN_PAGE} component={LoginPageContainer} />
      <Redirect path="*" to={ROUTES.LOGIN_PAGE} />
    </Switch>
  );
};
export default Pages;
