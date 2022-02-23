import styled from "styled-components";

import ReactPaginate from 'react-paginate';

import CircularProgress from '@mui/material/CircularProgress';

import './styles.css';

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

const Div = styled.div`
  border: 6px solid rgba(12, 28, 72, 0.83);
  margin: 15px 30px;
  border-radius: 10px;
  padding: 5px;
  width: 25%;
  height: 300px;
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

const Description = styled.span`
  color: #4b390e;
`;

const PaginateDiv = styled.div`
  display: flex;
`;

const Article = styled.div`
  height: 245px;
`;

const MainPageLayout = ({posts, handleGoToPost, pageCount, handlePageClick, isLoading}) => {
  return (
    <>
      <H1>
        Main Page
      </H1>
        {isLoading ? (<CircularProgress/>) : (
            <>
                <Wrapper>
                    {posts.map(post => {
                        const {id, title, body} = post;
                        return (
                            <Div key={id}>
                                <Article>
                                    <div><Description>Title : </Description>{title}</div>
                                    <div>Post : {body}</div>
                                </Article>
                                <Button onClick={() => handleGoToPost(id)}>Go To Comments</Button>
                            </Div>
                        )
                    })}
                </Wrapper>
                <PaginateDiv>
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
                </PaginateDiv>
            </>
        )}
    </>
  );
};

export default MainPageLayout;
