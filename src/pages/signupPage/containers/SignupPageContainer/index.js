import { useCallback } from "react";

import SignupPageLayout from "../../components/SignupPageLayout";

const SignupPageContainer = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = event.target.elements;
    console.log({
      Email: email.value,
      Password: password.value,
      ConfirmPassword: confirmPassword.value,
    });
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  }, []);

  return <SignupPageLayout handleSubmit={handleSubmit} />;
};
export default SignupPageContainer;
