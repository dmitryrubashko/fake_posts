import styled from 'styled-components'

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

const Div = styled.div`
  border: 3px solid rgba(12, 28, 72, 0.83);
  margin: 15px 30px;
  border-radius: 10px;
  padding: 5px;
  width: 50%;
`;

const Wrapper = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  font-family: 'Texturina', serif;
  color: rgb(52, 40, 51);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Description = styled.span`
  color: #836729;
`;

const Comment = styled.div`
  margin-bottom: 30px;
`;

const PostPageLayout = ({id, postsOfSelectedUser, commentsOfSelectedUser}) => {
  return (
    <>
        <H1>
            Post
        </H1>
        <Wrapper>
            {postsOfSelectedUser.map((post) => {
                const {title, body, id} = post;
                return <Div key={id}>
                    <div><Description>Title : </Description>{title}</div>
                    <article>Post : {body}</article>
                    </Div>
            })}
        </Wrapper>
        <H2>
            Comments :
        </H2>
        <Wrapper>
            {commentsOfSelectedUser.map((comment) => {
                const {name, email, body} = comment;
                return <Div key={name}>
                    <Comment>Comment : {body}</Comment>
                    <div>Name : {name}</div>
                    <div>Email : {email}</div>
                </Div>
            })}
        </Wrapper>
    </>
  );
};

export default PostPageLayout;
