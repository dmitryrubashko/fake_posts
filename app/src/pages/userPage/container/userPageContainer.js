import {useState, useEffect, createContext, useContext, useCallback} from 'react';

import {useLocation} from 'react-router-dom';

import axios from "axios";

import UserPageLayout from "../components/userPageComponent";

const userContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/users';
const baseURL2 = 'https://jsonplaceholder.typicode.com/posts';

const UserPageContainer = () => {

  const [users, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(baseURL2).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
      <userContext.Provider value={{users, posts}}>
        <Layout/>
      </userContext.Provider>
  );
};

const Layout = () => {

  const users = useContext(userContext);
  const posts = useContext(userContext);

  const location = useLocation();
  const elements = location.pathname.split('/');
  const id = elements[elements.length-1];

  const postsOfSelectedUser = posts.posts.reduce((result, post) => {
    if (post.userId === users.users[id-1]?.id ) {
      result.push(post)
    }
    return result
  }, [])

  return (
      <UserPageLayout
          users={users}
          id={id}
          postsOfSelectedUser={postsOfSelectedUser}
      />
  )
}

export default UserPageContainer;


