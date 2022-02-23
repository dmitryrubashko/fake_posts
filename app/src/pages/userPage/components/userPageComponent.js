import styled from 'styled-components'

import {CircularProgress} from "@mui/material";

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

const UserPageLayout = ({users, id, postsOfSelectedUser, handleGoToPost, isLoadingUserInfo, isLoadingPosts}) => {
    return (
        <>
            <H1>
                {users.users[id-1]?.name}'s Info
            </H1>
            {isLoadingUserInfo && isLoadingPosts ? <CircularProgress/> : (
                <>
                    <Div>
                        <User>
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
            )}
        </>
    );
};

export default UserPageLayout;
