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

const UserPageLayout = ({users, id}) => {

  return (
      <>
          <H1>
              {users[id-1]?.name}'s Page
          </H1>
          <Layout>
              <Div >
                  <div>Id : {users[id-1]?.id}</div>
                  <div>Name : {users[id-1]?.name}</div>
                  <div>Username : {users[id-1]?.username}</div>
                  <div>Email : {users[id-1]?.email}</div>
                  Address :
                  <div>Street : {users[id-1]?.address.street}</div>
                  <div>Suite : {users[id-1]?.address.suite}</div>
                  <div>City : {users[id-1]?.address.city}</div>
                  <div>Zipcode : {users[id-1]?.address.zipcode}</div>
                  <div>Geo.lat : {users[id-1]?.address.geo.lat}</div>
                  <div>Geo.lng : {users[id-1]?.address.geo.lng}</div>
                  <div>Phone : {users[id-1]?.phone}</div>
                  <div>Website : {users[id-1]?.website}</div>
                  Company :
                  <div>Name : {users[id-1]?.company.name}</div>
                  <div>CatchPhrase : {users[id-1]?.company.catchPhrase}</div>
                  <div>Bs : {users[id-1]?.company.bs}</div>
              </Div>
          </Layout>
      </>
  );
};

export default UserPageLayout;
