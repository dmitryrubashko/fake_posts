import { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAuth } from "../../../../shared/actions/isAuthAction";
import LoginPageLayout from "../../components/LoginPageLayout";

const LoginPageContainer = () => {
  const [emailData, setEmailData] = useState(null);
  
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ Email: email.value, Password: password.value });
    if (email.value.includes("@")) {
      history.push("/main");
      dispatch(getAuth(true))
    } else {
      setEmailData("Please include an @ in the email address!");
      dispatch(getAuth(false))
    }
    email.value = "";
    password.value = "";
  }, []);

  return <LoginPageLayout handleSubmit={handleSubmit} emailData={emailData} />;
};
export default LoginPageContainer;
