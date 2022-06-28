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
    fetch(`http://localhost:8080/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((response) => {
        console.log("response", response);
        if (response.status === 204) {
          return new Promise((resolve) => resolve(null));
        }
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        localStorage.setItem("Auth", response); // saving a token to localStorage
        if (response) {
          localStorage.setItem("isAuth", true);
          dispatch(getAuth(true));
          history.push("/main");
        } else {
          localStorage.setItem("isAuth", false);
          dispatch(getAuth(false));
        }
      });
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
