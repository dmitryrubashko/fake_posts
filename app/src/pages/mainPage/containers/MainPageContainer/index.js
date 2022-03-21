import {useContext, useCallback, useState, useLayoutEffect} from 'react';
import {useHistory} from "react-router-dom";

import MainPageLayout from "../../components/MainPageLayout";
import Context from "../../../../shared/commonComponents/Context/context";

const MainPageContainer = () => {
  const {posts, isLoadingPosts, postsError} = useContext(Context);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const history = useHistory();

  const [postsOnMainPage, setPostsOnMainPage] = useState([]);

  useLayoutEffect(() => {
    setPageCount(Math.ceil(posts.length / perPage));
    setPostsOnMainPage(posts.slice(offset, offset + perPage));
  }, [offset, posts]);

  const handleGoToPost = useCallback((post) => {
    history.push(`/posts/${post}`);
  }, []);

  const handlePageClick = useCallback((event) => {
     const selectedPage = event.selected;
     setOffset((selectedPage) * perPage);
  }, []);

  return (
    <MainPageLayout
      pageCount={pageCount}
      postsOnMainPage={postsOnMainPage}
      isLoadingPosts={isLoadingPosts}
      postsError={postsError}
      handleGoToPost={handleGoToPost}
      handlePageClick={handlePageClick}
    />
  )
}
export default MainPageContainer;