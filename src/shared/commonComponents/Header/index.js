import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { getAuth } from "../../store/actions/isAuthAction";
import { ROUTES } from "../../routes/routesNames";

import styles from "./styles.module.scss";

const Header = () => {
  const { isAuth } = useSelector((state) => state.loginPageList);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <header>This app was made with the help of JSONPlaceholder!</header>
      <Link to={ROUTES.LOGIN_PAGE}>
        <div className={styles.signIn}>
          <Button variant="contained" color="success">
            Sign in
          </Button>
        </div>
      </Link>
      <div>
        <Link to={ROUTES.LOGIN_PAGE}>
          <div className={styles.logOut}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                dispatch(getAuth(false));
                localStorage.clear();
                history.push("/");
              }}
            >
              Log out
            </Button>
          </div>
        </Link>
      </div>
      {isAuth && (
        <div>
          <Link to={ROUTES.USERS_PAGE} className={styles.link}>
            <Button variant="contained" color="success">
              Users Page
            </Button>
          </Link>
          <Link to={ROUTES.MAIN_PAGE} className={styles.link}>
            <Button variant="contained" color="success">
              Main Page
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
