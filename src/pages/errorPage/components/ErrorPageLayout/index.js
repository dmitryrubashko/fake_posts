import { ROUTES } from "../../../../shared/routes/routesNames";

import FPButton from "../../../../shared/commonComponents/Button";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const ErrorPageLayout = () => {
  return (
    <div className={styles.ErrorPageContainer__container}>
      <div className={styles.ErrorPageLayout__error}>404</div>
      <div className={styles.ErrorPageLayout__errorMessage}>
        Something went wrong. Try to reload this page.
      </div>
      <Link
        to={ROUTES.USERS_PAGE}
        className={styles.ErrorPageLayout__button_active}
      >
        <FPButton> Visit Users Page</FPButton>
      </Link>
    </div>
  );
};

export default ErrorPageLayout;
