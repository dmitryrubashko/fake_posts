import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link, useLocation } from "react-router-dom";

import { getAuth } from "../../store/reducers/LoginPageReducer/thunks";
import { ROUTES } from "../../routes/routesNames";
import FPButton from "../Button";

import styles from "./styles.module.scss";

const Header = () => {
  const { isAuth } = useSelector((state) => state.loginPageList);

  const history = useHistory();
  const dispatch = useDispatch();

  const location = useLocation();
  const elements = location.pathname.split("/");
  const page = elements[elements.length - 1];

  return (
    <>
      {page === "error" ? null : (
        <div className={styles.Header__wrapperContainer}>
          <header>This app was made with the help of JSONPlaceholder!</header>
          <div>
            <Link to={ROUTES.LOGIN_PAGE}>
              <div className={styles.Header__logoutButton}>
                <FPButton
                  onClick={() => {
                    dispatch(getAuth(false));
                    localStorage.clear();
                    history.push("/");
                  }}
                >
                  Log out
                </FPButton>
              </div>
            </Link>
          </div>
          {isAuth && (
            <div>
              <Link
                to={ROUTES.USERS_PAGE}
                className={styles.Header__linkButton}
              >
                <FPButton>Users Page</FPButton>
              </Link>
              <Link to={ROUTES.MAIN_PAGE} className={styles.Header__linkButton}>
                <FPButton>Main Page</FPButton>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Header;
