import styled from 'styled-components';

const Form = styled.form`
  border: 5px solid rgba(12, 28, 72, 0.83);
  border-radius: 15px;
  width: 40%;
  text-align: center;
  color: rgba(12, 28, 72, 0.83);
  background-color: #249f75;
  margin: auto;
  padding-bottom: 20px;
  font-family: 'Texturina', serif;
`;

const Button = styled.button`
  background: #be9c58;
  border: 3px solid rgba(12, 28, 72, 0.83);
  border-radius: 5px;
  color: rgba(12, 28, 72, 0.83);
  font-size: 22px;
  font-family: 'Texturina', serif;
`;

const Input = styled.input`
  background: #b6a27f;
  border: 3px solid rgba(12, 28, 72, 0.83);
  border-radius: 5px;
  width: 45%;
  margin-bottom: 0.5em;
  outline: none;
  font-size: 22px;
  font-family: 'Texturina', serif;
  color: rgba(12, 28, 72, 0.83);
`;

const Login = styled.div`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
  font-weight: bold;
`;

const Word = styled.div`
  font-size: 24px;
`;

const H1 = styled.h1`
  font-size: 48px;
  margin-top: 0;
`;

const EmailData = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  color: #8d2828;
  font-size: 24px;
  background-color: rgba(194, 111, 139, 0.73);
  width: 90%;
  border-radius: 15px;
`;

const LoginPageLayout = ({handleSubmit, emailData}) => {
  return (
    <>
      <Login>
        Login Page
      </Login>
      <Form onSubmit={handleSubmit} noValidate>
        <H1>Welcome back</H1>
        <div>
          <label>
            <Word>Email</Word>
            <Input
              placeholder="Enter your email"
              name='email'
              type='email'
            />
          </label>
          <EmailData>{emailData}</EmailData>
        </div>
        <div>
          <label>
            <Word>Password</Word>
            <Input
              placeholder="Enter your password"
              name='password'
              type='password'
            />
          </label>
        </div>
        <Button>
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default LoginPageLayout;
