import {useCallback} from "react";

import LoginPageLayout from "../components/loginPageComponent";

const LoginPageContainer = () => {

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    console.log({Email: email.value, Password: password.value});
    email.value = '';
    password.value = '';
  }, [])

  return (
    <LoginPageLayout
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPageContainer;
