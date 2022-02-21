// import {useState, useEffect} from "react";
//
// import axios from 'axios';
//
// import MainPageLayout from "../components/mainPageComponent";
//
// const MainPageContainer = () => {
//
//   const [posts, setPosts] = useState([]);
//   const baseURL = 'https://jsonplaceholder.typicode.com/posts';
//
//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPosts(response.data);
//     });
//   }, []);
//
//   return (
//     <MainPageLayout
//       posts={posts}
//     />
//   );
// };
//
// export default MainPageContainer;

import {useState, useEffect, createContext, useContext, useCallback} from 'react';

import {useHistory} from 'react-router-dom';

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

  const posts = useContext(postsContext)

  return (
    <MainPageLayout
      posts={posts}
    />
  )
}

export default MainPageContainer;





