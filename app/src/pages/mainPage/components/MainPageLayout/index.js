import styled from "styled-components";

import loading from "../../../../shared/assets/images/loading.gif";

const H1 = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: "Texturina", serif;
  margin-top: 0;
`;

const Wrapper = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  font-family: "Texturina", serif;
  color: rgb(52, 40, 51);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Post = styled.div`
  border: 6px solid rgba(12, 28, 72, 0.83);
  margin: 15px 30px;
  border-radius: 10px;
  padding: 5px;
  width: 25%;
  height: 340px;
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

const Title = styled.span`
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  Link:active {
    background-color: yellow;
  }
`;

const Paginate = styled.div`
  padding-top: 20px;
`;

const Link = styled.a`
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  color: #0c1c48d3;
  background-color: #b6a27f;
  border: 1px solid #816026;

  :active {
    background: #249f75;
    color: white;
    border-color: #249f75;
  }
`;

const Buttons = styled.button`
  padding-top: 12px;
  color: #0c1c48d3;
  background-color: #b6a27f;
  border: 1px solid #816026;
  margin-left: -1px;
  display: flex;
  margin-top: 11px;
  height: 39.5px;
`;

const MainPageLayout = ({
  handleGoToPost,
  isLoading,
  error,
  posts,
  paginate,
  goToNextPage,
  goToPreviousPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {error && <Error>Not Found</Error>}
      {isLoading && <Loader>{<img src={loading} alt={"loading"} />}</Loader>}
      {!isLoading && (
        <>
          <H1>Main Page</H1>
          <Wrapper>
            {posts.map((post) => {
              const { id, title, body } = post;
              return (
                <Post key={id}>
                  <div>
                    <div>
                      <Title>Title : </Title>
                      {title}
                    </div>
                    <div>Post : {body}</div>
                  </div>
                  <Button onClick={() => handleGoToPost(id)}>
                    Go To Comments
                  </Button>
                </Post>
              );
            })}
          </Wrapper>
          <Pagination>
            <Buttons onClick={() => goToPreviousPage()}>Prev</Buttons>
            {pageNumbers.map((number) => (
              <Paginate key={number}>
                <Link onClick={() => paginate(number)}>{number}</Link>
              </Paginate>
            ))}
            <Buttons onClick={() => goToNextPage()}>Next</Buttons>
          </Pagination>
        </>
      )}
    </>
  );
};
export default MainPageLayout;
