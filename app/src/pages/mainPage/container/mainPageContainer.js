import {useState, useEffect, createContext, useContext, useCallback} from 'react';

import axios from "axios";

import MainPageLayout from "../components/mainPageComponent";
import {useHistory} from "react-router-dom";

const postsContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

const MainPageContainer = () => {

  const [offset, setOffset] = useState(0); /////////////////////
  const [perPage] = useState(10); //////////////////////////
  const [pageCount, setPageCount] = useState(0) /////////////
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPageCount(Math.ceil(response.data.length/perPage)) //////////////
      setPosts(response.data.slice(offset, offset+perPage)) ///////////////////
      setIsLoading(false)
    });
  }, [offset]); /////////////////////////

  const handlePageClick = (e) => {        //////////////////////
    const selectedPage = e.selected;          ///////////////////////
    setOffset((selectedPage)*perPage)       //////////////////////
  }                                     //////////////////////

  return (
    <postsContext.Provider value={posts}>
      <Layout
          pageCount={pageCount} ////////////////////
          handlePageClick={handlePageClick} //////////////
          isLoading={isLoading}
      />
    </postsContext.Provider>
  );
};

const Layout = ({pageCount, handlePageClick, isLoading}) => {

  const posts = useContext(postsContext);

  const history = useHistory();

  const handleGoToPost = useCallback((post) => {
    history.push(`/posts/${post}`);
  }, []);

  return (
    <MainPageLayout
      posts={posts}
      handleGoToPost={handleGoToPost}
      pageCount={pageCount}             ////////////////
      handlePageClick={handlePageClick}       /////////////////
      isLoading={isLoading}
    />
  )
}

export default MainPageContainer;





