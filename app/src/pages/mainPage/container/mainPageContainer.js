import {useState, useEffect, createContext, useContext, useCallback} from 'react';

import axios from "axios";

import MainPageLayout from "../components/mainPageComponent";
import {useHistory} from "react-router-dom";

const postsContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

const MainPageContainer = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <postsContext.Provider value={posts}>
      <Layout/>
    </postsContext.Provider>
  );
};

const Layout = () => {

  const posts = useContext(postsContext);

  const history = useHistory();

  const handleGoToPost = useCallback((post) => {
    history.push(`/posts/${post}`);
  }, []);

  return (
    <MainPageLayout
      posts={posts}
      handleGoToPost={handleGoToPost}
    />
  )
}

export default MainPageContainer;





