import {useState, useEffect, createContext, useContext} from 'react';

import axios from "axios";

import MainPageLayout from "../components/mainPageComponent";

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

  return (
    <MainPageLayout
      posts={posts}
    />
  )
}

export default MainPageContainer;





