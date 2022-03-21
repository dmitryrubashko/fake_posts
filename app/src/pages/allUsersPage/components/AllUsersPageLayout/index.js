import styled from "styled-components";

import loading from "../../../../shared/static/images/loading.gif";

const H1 = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: "Texturina", serif;
  margin-top: 0;
  text-align: center;
`;

const Users = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-family: "Texturina", serif;
  color: rgb(52, 40, 51);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
`;

const Div = styled.div`
  border: 5px solid rgba(12, 28, 72, 0.83);
  margin: 15px auto 30px auto;
  border-radius: 10px;
  padding: 5px;
  width: 25%;
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
  margin: 10px;
`;

const Name = styled.span`
  color: #4b390e;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

const Error = styled.div`
  text-align: center;
  color: #771c1c;
  font-family: "Original Surfer", cursive;
  font-size: 96px;
  margin: 20px;
`;

const AllUsersPageLayout = ({ users, handleGoToDetails, isLoading, error }) => {
  return (
    <>
      {error && <Error>Not Found</Error>}
      {isLoading && <Loader>{<img src={loading} alt={"loading"} />}</Loader>}
      {!isLoading && (
        <>
          <H1>Users Page</H1>
          <Users>
            {users.map((user) => {
              const { id, name, username } = user;
              return (
                <Div key={id}>
                  <div>
                    <Name>Name : </Name>
                    {name}
                  </div>
                  <div>Username : {username}</div>
                  <Button onClick={() => handleGoToDetails(id)}>
                    Visit Page
                  </Button>
                </Div>
              );
            })}
          </Users>
        </>
      )}
    </>
  );
};
export default AllUsersPageLayout;
