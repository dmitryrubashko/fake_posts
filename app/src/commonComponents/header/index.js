import styled from 'styled-components'

import {Link} from "react-router-dom";

import {ROUTES} from "../../routes/routesNames";

const HeaderDiv = styled.header`
  font-size: 36px;
  color: #836729;
  font-family: 'Original Surfer', cursive;
  display: inline-block;
`;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Original Surfer', cursive;
  color: rgba(12, 28, 72, 0.83);
  background-color: #249f75;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 3px solid rgba(12, 28, 72, 0.83);
  position: absolute;
  right: 1%;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderDiv>This app was made with the help of JSONPlaceholder!</HeaderDiv>
      <Link to={ROUTES.LOGIN}>
        <Button>Sign in</Button>
      </Link>
    </Wrapper>
  );
};

export default Header;
