import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAuth } from "../../../../shared/store/reducers/LoginPageReducer/thunks";
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
    if (email.value.includes("@") && password.value.length >= 8) {
      localStorage.setItem("isAuth", true);
      dispatch(getAuth(true));
      history.push("/main");
      console.log({ Email: email.value, Password: password.value });
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
