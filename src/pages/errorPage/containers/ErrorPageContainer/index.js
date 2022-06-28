import { useHistory } from "react-router-dom";

import ErrorPageLayout from "../../components/ErrorPageLayout";

const ErrorPageContainer = () => {
  const history = useHistory();
  const handleBackToPreviousPage = () => {
    history.goBack();
  };
  const handleBackToLoginPage = () => {
    history.push("./login");
  };

  return (
    <ErrorPageLayout
      handleBackToPreviousPage={handleBackToPreviousPage}
      handleBackToLoginPage={handleBackToLoginPage}
    />
  );
};

export default ErrorPageContainer;
