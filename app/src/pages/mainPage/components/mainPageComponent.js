import styled from "styled-components";

import CustomPagination from "../../../commonComponents/customPagination";

const H1 = styled.div`
  text-align: center;
  font-size: 64px;
  margin-bottom: 20px;
  color: rgb(52, 40, 51);
  font-family: 'Texturina', serif;
`;

const Wrapper = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  font-family: 'Texturina', serif;
  color: rgb(52, 40, 51);
`;

const Div = styled.div`
  border: 3px solid rgba(12, 28, 72, 0.83);
  margin: 15px 30px;
  border-radius: 10px;
  padding: 5px;
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Description = styled.span`
  color: #836729;
`;

const MainPageLayout = ({posts}) => {
  return (
    <>
      <H1>
        Main Page
      </H1>
      <Wrapper>
        {posts.map(post => {
          const {id, title, body} = post;
          return (
            <Div key={id}>
              <div><Description>Title : </Description>{title}</div>
              <div>{body}</div>
            </Div>
          )
        })}
      </Wrapper>
      <PaginationDiv>
        <CustomPagination
          pageCount={10}
        />
      </PaginationDiv>
    </>
  );
};

export default MainPageLayout;
