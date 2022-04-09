import { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAuth } from "../../../../shared/store/actions/isAuthAction";
import LoginPageLayout from "../../components/LoginPageLayout";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goToSignupPage = () => {
    history.push("/signup");
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ Email: email.value, Password: password.value });
    if (email.value && password.value >= 8) {
      localStorage.setItem("isAuth", true);
      history.push("/main");
      dispatch(getAuth(true));
    } else {
      localStorage.setItem("isAuth", false);
      dispatch(getAuth(false));
    }
    email.value = "";
    password.value = "";
  }, []);

  return (
    <LoginPageLayout
      handleSubmit={handleSubmit}
      goToSignupPage={goToSignupPage}
    />
  );
};
export default LoginPageContainer;
