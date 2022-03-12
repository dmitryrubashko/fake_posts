import loading from "../../../../shared/static/images/loading.gif";

import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
  margin-top: 0;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 48px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
  margin: 0;
`;

const User = styled.div`
  border: 10px solid rgba(12, 28, 72, 0.83);
  border-radius: 30px;
  padding: 15px;
  width: 25%;
  text-align: center;
`;

const Div = styled.div`
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
  width: 30%;
  margin: 15px;
  font-weight: bold;
  text-align: center;
  color: rgb(52, 40, 51);
`;

const Title = styled.span`
  color: #4b390e;
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

const Article = styled.div`
  padding: 5px;
`;

const Loader = styled.div`
  display:flex;
  justify-content: center;
`;

const Error = styled.div`
  text-align: center;
  color: #771c1c;
  font-family: 'Original Surfer', cursive;
  font-size: 96px;
  margin: 20px;
`;

const UserPageLayout = ({users,
                          id,
                          postsOfSelectedUser,
                          handleGoToPost,
                          isLoadingUserInfo,
                          isLoadingPosts,
                          usersError,
                          postsError}) => {
  return (
    <>
      {(usersError || postsError) && <Error>Not Found</Error>}
      {(isLoadingUserInfo || isLoadingPosts) && <Loader>{<img src={loading} alt={"loading"}/>}</Loader>}
      {(!isLoadingUserInfo && !isLoadingPosts) &&
        <>
          <H1>
            {users[id-1]?.name}'s Info
          </H1>
          <Div>
            <User>
              <div>UserId : {users[id-1]?.id}</div>
              <div>Name : {users[id-1]?.name}</div>
              <div>Username : {users[id-1]?.username}</div>
              <div>Email : {users[id-1]?.email}</div>
              Address :
              <div>Street : {users[id-1]?.address?.street}</div>
              <div>Suite : {users[id-1]?.address?.suite}</div>
              <div>City : {users[id-1]?.address?.city}</div>
              <div>Zipcode : {users[id-1]?.address?.zipcode}</div>
              <div>Geo.lat : {users[id-1]?.address?.geo?.lat}</div>
              <div>Geo.lng : {users[id-1]?.address?.geo?.lng}</div>
              <div>Phone : {users[id-1]?.phone}</div>
              <div>Website : {users[id-1]?.website}</div>
              Company :
              <div>Name : {users[id-1]?.company?.name}</div>
              <div>CatchPhrase : {users[id-1]?.company?.catchPhrase}</div>
              <div>Bs : {users[id-1]?.company?.bs}</div>
            </User>
          </Div>
          <H2>
            Posts
          </H2>
          <Posts>
            {postsOfSelectedUser.map((post) => {
              const {title, body, id} = post;
              return <Post key={id}>
                <Article>
                  <div><Title>Title :</Title> {title}</div>
                  <div>Post : {body}</div>
                </Article>
                <Button onClick={() => handleGoToPost(id)}>Go To Comments</Button>
              </Post>;
            })}
          </Posts>
        </>
      }
    </>
  );
};

export default UserPageLayout;