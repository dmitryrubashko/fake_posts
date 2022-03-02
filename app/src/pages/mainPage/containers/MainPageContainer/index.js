import {useState, useEffect, createContext, useContext, useCallback} from 'react';
import {useHistory} from "react-router-dom";

import MainPageLayout from "../../components/MainPageLayout";
import Api from "../../../../shared/commonComponents/api";

const postsContext = createContext(null);

const urlDataPosts = Api.get(`/posts`);

const MainPageContainer = () => {

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    urlDataPosts.then((response) => {
      setPageCount(Math.ceil(response.data.length/perPage));
      setPosts(response.data.slice(offset, offset+perPage));
      setIsLoading(false);
    })
      .catch((error) => {
        setError(error);
      });
  }, [offset]);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset((selectedPage)*perPage);
  }

  return (
    <postsContext.Provider value={posts}>
      <Layout
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          isLoading={isLoading}
          error={error}
      />
    </postsContext.Provider>
  );
};

const Layout = ({pageCount, handlePageClick, isLoading, error}) => {

  const posts = useContext(postsContext);
  const history = useHistory();

  const handleGoToPost = useCallback((post) => {
    history.push(`/posts/${post}`);
  }, []);

  return (
    <MainPageLayout
      error={error}
      posts={posts}
      handleGoToPost={handleGoToPost}
      pageCount={pageCount}
      handlePageClick={handlePageClick}
      isLoading={isLoading}
    />
  )
}

export default MainPageContainer;





