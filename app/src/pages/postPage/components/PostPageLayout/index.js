import styled from "styled-components";

import loading from "../../../../shared/static/images/loading.gif";

const H1 = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: "Texturina", serif;
  margin-top: 0;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 48px;
  color: rgb(52, 40, 51);
  font-family: "Texturina", serif;
  margin: 0;
`;

const Article = styled.div`
  border: 3px solid rgba(12, 28, 72, 0.83);
  margin: 15px 30px;
  border-radius: 10px;
  padding: 5px;
  width: 50%;
`;

const Div = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  font-family: "Texturina", serif;
  color: rgb(52, 40, 51);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Title = styled.span`
  color: #4b390e;
`;

const Comment = styled.div`
  margin-bottom: 30px;
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

const PostPageLayout = ({
  postsOfSelectedUser,
  commentsOfSelectedUser,
  isLoadingPosts,
  isLoadingComments,
  postsError,
  commentsError,
}) => {
  return (
    <>
      {(postsError || commentsError) && <Error>Not Found</Error>}
      {(isLoadingPosts || isLoadingComments) && (
        <Loader>{<img src={loading} alt={"loading"} />}</Loader>
      )}
      {!isLoadingPosts && !isLoadingComments && (
        <>
          <H1>Post</H1>
          <Div>
            {postsOfSelectedUser.map((post) => {
              const { title, body, id } = post;
              return (
                <Article key={id}>
                  <div>
                    <Title>Title : </Title>
                    {title}
                  </div>
                  <article>Post : {body}</article>
                </Article>
              );
            })}
          </Div>
          <H2>Comments :</H2>
          <Div>
            {commentsOfSelectedUser.map((comment) => {
              const { name, email, body } = comment;
              return (
                <Article key={name}>
                  <Comment>Comment : {body}</Comment>
                  <div>Name : {name}</div>
                  <div>Email : {email}</div>
                </Article>
              );
            })}
          </Div>
        </>
      )}
    </>
  );
};
export default PostPageLayout;
