import { useHistory } from "react-router-dom";

import FPButton from "../../../../shared/commonComponents/Button";

import styles from "./styles.module.scss";

const ErrorPageLayout = () => {
  const history = useHistory();
  return (
    <div className={styles.ErrorPageContainer__container}>
      <div className={styles.ErrorPageLayout__error}>404</div>
      <div className={styles.ErrorPageLayout__errorMessage}>
        Something went wrong. Try to reload this page and click the button
        bellow
      </div>

      <FPButton onClick={() => history.goBack()}>Go To Previous Page</FPButton>
    </div>
  );
};

export default ErrorPageLayout;
