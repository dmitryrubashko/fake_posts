import styled from 'styled-components'

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

const LoginPageLayout = ({handleSubmit}) => {
  return (
    <>
      <Login>
        Login Page
      </Login>
      <Form onSubmit={handleSubmit}>
        <H1>Welcome back</H1>
        <div>
          <label>
            <Word>Email</Word>
            <Input
              name='email'
              type='email'
            />
          </label>
        </div>
        <div>
          <label>
            <Word>Password</Word>
            <Input
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
