import SignupPageLayout from "../../components/SignupPageLayout";

const SignupPageContainer = () => {
  const handleActivateButton = () => {
    document.getElementById("submit-button").disabled = false;
  };
  return <SignupPageLayout handleActivateButton={handleActivateButton} />;
};
export default SignupPageContainer;
