import { useCallback, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import LoginPageLayout from "../../components/LoginPageLayout";
import Context from "../../../../shared/commonComponents/Context/context";

const LoginPageContainer = () => {
  const [emailData, setEmailData] = useState(null);
  const { setIsAuth } = useContext(Context);

  const history = useHistory();
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ Email: email.value, Password: password.value });
    if (email.value.includes("@") && password.value.length >= 3) {
      localStorage.setItem('isAuth', true);
      history.push("/main");
      setIsAuth(true);
    } else {
      setEmailData(
        "Please include an @ in the email address and use at least three symbols in your password!"
      );
      localStorage.setItem('isAuth', false);
      setIsAuth(false);
    }
    email.value = "";
    password.value = "";
  }, []);

  return <LoginPageLayout handleSubmit={handleSubmit} emailData={emailData} />;
};
export default LoginPageContainer;
