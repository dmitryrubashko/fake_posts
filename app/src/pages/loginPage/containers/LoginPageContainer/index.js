import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import LoginPageLayout from "../../components/LoginPageLayout";

const LoginPageContainer = () => {
  const [emailData, setEmailData] = useState(null);

  const [isAuth, setIsAuth] = useState(false);

  const history = useHistory();
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ Email: email.value, Password: password.value });
    if (email.value.includes("@")) {
      // history.push("");
      setIsAuth(true);
    } else {
      setEmailData("Please include an @ in the email address!");
      setIsAuth(false);
    }
    email.value = "";
    password.value = "";
  }, []);
  console.log(isAuth);

  return <LoginPageLayout handleSubmit={handleSubmit} emailData={emailData} />;
};
export default LoginPageContainer;
