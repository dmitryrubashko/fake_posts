import FPButton from "../../../../shared/commonComponents/Button";

import styles from "./styles.module.scss";

const ErrorPageLayout = ({ handleBackToPreviousPage }) => {
  return (
    <div className={styles.ErrorPageContainer__container}>
      <div className={styles.ErrorPageLayout__error}>404</div>
      <div className={styles.ErrorPageLayout__errorMessage}>
        Something went wrong. Try to reload this page and click the button
        bellow
      </div>
      <FPButton onClick={handleBackToPreviousPage}>
        Go Back To Previous Page
      </FPButton>
    </div>
  );
};
export default ErrorPageLayout;
