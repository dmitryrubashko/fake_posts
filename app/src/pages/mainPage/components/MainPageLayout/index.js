import ReactPaginate from 'react-paginate';

import loading from '../../../../shared/static/images/loading.gif';

import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
  margin-top: 0;
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
  font-family: 'Original Surfer', cursive;
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

const Pagination = styled.div`
  display: flex;
  
  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    padding-top: 20px;
    margin: 0 auto 20px;
  }
  .page-link {
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    color: #0C1C48D3;
    background-color: #b6a27f;
    border: 1px solid #816026;
  }
  
  li.page-item.active > a {
    background: #249f75;
    color: white;
    border-color: #249f75;
  }
`;

const MainPageLayout = ({postsOnMainPage,
                          handleGoToPost,
                          pageCount,
                          handlePageClick,
                          isLoadingPosts,
                          postsError}) => {
  return (
    <>
      {postsError && <Error>Not Found</Error>}
      {isLoadingPosts && <Loader>{<img src={loading} alt={"loading"}/>}</Loader>}
      {!isLoadingPosts &&
      <>
        <H1>
          Main Page
        </H1>
        <Wrapper>
          {postsOnMainPage.map(post => {
            const {id, title, body} = post;
            return (
              <Post key={id}>
                <div>
                  <div><Title>Title : </Title>{title}</div>
                  <div>Post : {body}</div>
                </div>
                <Button onClick={() => handleGoToPost(id)}>Go To Comments</Button>
              </Post>
            )
          })}
        </Wrapper>
        <Pagination>
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
            previousLabel="<"
            nextLabel=">"
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        </Pagination>
      </>
      }
    </>
  );
};

export default MainPageLayout;