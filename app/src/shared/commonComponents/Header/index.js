import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

import { getAuth } from "../../../shared/actions/isAuthAction";
import { ROUTES } from "../../routes/routesNames";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const HeaderDiv = styled.header`
  font-size: 36px;
  color: #4b390e;
  font-family: "Original Surfer", cursive;
  display: inline-block;
  margin-bottom: 20px;
`;

const Button = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  font-family: "Original Surfer", cursive;
  color: rgba(12, 28, 72, 0.83);
  background-color: #249f75;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 3px solid rgba(12, 28, 72, 0.83);
  margin: 0 10px;
`;

const ButtonSignIn = styled.button`
  font-size: 20px;
  font-weight: bold;
  font-family: "Original Surfer", cursive;
  color: rgba(12, 28, 72, 0.83);
  background-color: #249f75;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 3px solid rgba(12, 28, 72, 0.83);
  position: absolute;
  right: 1%;
  cursor: pointer;
`;

const ButtonLogOut = styled.button`
  margin-top: -20px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Original Surfer", cursive;
  color: rgba(12, 28, 72, 0.83);
  background-color: #249f75;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 3px solid rgba(12, 28, 72, 0.83);
  position: absolute;
  right: 1%;
`;

const Header = () => {
  const { isAuth } = useSelector((state) => state.loginPageList);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <HeaderDiv>This app was made with the help of JSONPlaceholder!</HeaderDiv>
      <Link to={ROUTES.LOGIN_PAGE}>
        <ButtonSignIn>Sign in</ButtonSignIn>
      </Link>
      <div>
        <Link to={ROUTES.LOGIN_PAGE}>
          <ButtonLogOut
            onClick={() => {
              dispatch(getAuth(false));
              localStorage.clear();
              history.push("/");
            }}
          >
            Log out
          </ButtonLogOut>
        </Link>
      </div>
      {isAuth && (
        <div>
          <Link to={ROUTES.USERS_PAGE}>
            <Button>Users Page</Button>
          </Link>
          <Link to={ROUTES.MAIN_PAGE}>
            <Button>Main Page</Button>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};
export default Header;
