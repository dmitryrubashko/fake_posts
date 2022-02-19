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
  background: #b6a27f;
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

const LoginDiv = styled.div`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
`;

const InputWordDiv = styled.div`
  font-size: 24px;
`;

const H1 = styled.h1`
  font-size: 48px;
`;

const LoginPageLayout = ({handleSubmit}) => {
  return (
    <>
      <LoginDiv>
        Login Page
      </LoginDiv>
      <Form onSubmit={handleSubmit}>
        <H1>Welcome back</H1>
        <div>
          <label>
            <InputWordDiv>Email</InputWordDiv>
            <Input
              name='email'
              type='email'
            />
          </label>
        </div>
        <div>
          <label>
            <InputWordDiv>Password</InputWordDiv>
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
