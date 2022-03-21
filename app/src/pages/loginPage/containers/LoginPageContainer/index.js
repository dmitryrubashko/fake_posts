import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import LoginPageLayout from "../../components/LoginPageLayout";

const LoginPageContainer = () => {
  const [emailData, setEmailData] = useState(null);
  const history = useHistory();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ Email: email.value, Password: password.value });
    if (email.value.includes("@")) {
      history.push("");
    } else {
      setEmailData("Please include an @ in the email address!");
    }
    email.value = "";
    password.value = "";
  }, []);

  return <LoginPageLayout handleSubmit={handleSubmit} emailData={emailData} />;
};
export default LoginPageContainer;
