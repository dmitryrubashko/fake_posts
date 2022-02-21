import styled from 'styled-components'

const H1 = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
`;

const Layout = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-family: 'Texturina', serif;
  color: rgb(52, 40, 51);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Div = styled.div`
  border:5px solid rgba(12, 28, 72, 0.83);
  margin: 15px auto 30px auto;
  border-radius: 10px;
  padding: 5px;
  width: 25%;
`;

const Button = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Original Surfer', cursive;
  color: rgba(12, 28, 72, 0.83);
  background-color: #249f75;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 3px solid rgba(12, 28, 72, 0.83);
  margin: 10px;
`;

const Description = styled.span`
  color: #836729;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const AllUsersPageLayout = ({users, handleGoToDetails}) => {
  return (
    <Wrapper>
        <H1>
            Users Page
        </H1>
        <Layout>
            {users.map((user) => {
                const {id, name, username} = user;
                return <Div key={id}>
                    <div><Description>Name : </Description>{name}</div>
                    <div>Username : {username}</div>
                    <Button onClick={() => handleGoToDetails(id)}>Visit Page</Button>
                </Div>;
            })
            }
        </Layout>
    </Wrapper>
  );
};

export default AllUsersPageLayout;
