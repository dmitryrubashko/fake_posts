import styled from 'styled-components'

const H1 = styled.div`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
`;

const Div = styled.div`
  border: 10px solid rgba(12, 28, 72, 0.83);
  border-radius: 30px;
  padding: 15px;
  width: 25%;
  text-align: center;
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

const UserPageLayout = ({user}) => {

  return (
      <>
          <H1>
              {user[0]?.name}'s Page
          </H1>
          <Layout>
              <Div >
                  <div>Id : {user[0]?.id}</div>
                  <div>Name : {user[0]?.name}</div>
                  <div>Username : {user[0]?.username}</div>
                  <div>Email : {user[0]?.email}</div>
                  Address :
                  <div>Street : {user[0]?.address.street}</div>
                  <div>Suite : {user[0]?.address.suite}</div>
                  <div>City : {user[0]?.address.city}</div>
                  <div>Zipcode : {user[0]?.address.zipcode}</div>
                  <div>Geo.lat : {user[0]?.address.geo.lat}</div>
                  <div>Geo.lng : {user[0]?.address.geo.lng}</div>
                  <div>Phone : {user[0]?.phone}</div>
                  <div>Website : {user[0]?.website}</div>
                  Company :
                  <div>Name : {user[0]?.company.name}</div>
                  <div>CatchPhrase : {user[0]?.company.catchPhrase}</div>
                  <div>Bs : {user[0]?.company.bs}</div>
              </Div>
          </Layout>
      </>
  );
};

export default UserPageLayout;
