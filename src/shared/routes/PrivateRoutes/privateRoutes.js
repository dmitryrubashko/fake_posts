import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../routesNames";

const PrivateRoute = ({ ...props }) => {
  const { isAuth } = useSelector((state) => state.loginPageList);
  if (isAuth) {
    return <Route {...props} />;
  } else return <Redirect to={ROUTES.LOGIN_PAGE} />;
};

export default PrivateRoute;
