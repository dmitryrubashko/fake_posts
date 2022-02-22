import styled from 'styled-components'

const H1 = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 48px;
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

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Post = styled.div`
  font-size: 20px;
  font-family: 'Texturina', serif;
  border: 6px solid rgba(12, 28, 72, 0.83);
  border-radius: 20px;
  width: 44%;
  margin: 15px;
  font-weight: bold;
  text-align: center;
  color: rgb(52, 40, 51);
`;

const Title = styled.span`
  color: #836729;
`;

const UserPageLayout = ({users, id, postsOfSelectedUser}) => {

    console.log(postsOfSelectedUser)
    return (
        <>
            <H1>
                {users.users[id-1]?.name}'s Info
            </H1>
            <Layout>
                <Div>
                    <div>UserId : {users.users[id-1]?.id}</div>
                    <div>Name : {users.users[id-1]?.name}</div>
                    <div>Username : {users.users[id-1]?.username}</div>
                    <div>Email : {users.users[id-1]?.email}</div>
                    Address :
                    <div>Street : {users.users[id-1]?.address?.street}</div>
                    <div>Suite : {users.users[id-1]?.address?.suite}</div>
                    <div>City : {users.users[id-1]?.address?.city}</div>
                    <div>Zipcode : {users.users[id-1]?.address?.zipcode}</div>
                    <div>Geo.lat : {users.users[id-1]?.address?.geo?.lat}</div>
                    <div>Geo.lng : {users.users[id-1]?.address?.geo?.lng}</div>
                    <div>Phone : {users.users[id-1]?.phone}</div>
                    <div>Website : {users.users[id-1]?.website}</div>
                    Company :
                    <div>Name : {users.users[id-1]?.company?.name}</div>
                    <div>CatchPhrase : {users.users[id-1]?.company?.catchPhrase}</div>
                    <div>Bs : {users.users[id-1]?.company?.bs}</div>
                </Div>
            </Layout>
            <H2>
                Posts
            </H2>
            <Posts>
                {postsOfSelectedUser.map((post) => {
                    const {title, body} = post;
                    return <Post>
                        <div><Title>Title :</Title> {title}</div>
                        <article>Post : {body}</article>
                    </Post>;
                })}
            </Posts>
        </>
    );
};

export default UserPageLayout;
