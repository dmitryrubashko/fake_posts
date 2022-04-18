import { useHistory } from "react-router-dom";

import ErrorPageLayout from "../../components/ErrorPageLayout";

const ErrorPageContainer = () => {
  const history = useHistory();
  const handleBackToPreviousPage = () => {
    history.goBack();
  };

  return (
    <ErrorPageLayout handleBackToPreviousPage={handleBackToPreviousPage} />
  );
};
export default ErrorPageContainer;
