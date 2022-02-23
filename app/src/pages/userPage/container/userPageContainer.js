import {useState, useEffect, createContext, useContext, useCallback} from 'react';

import {useHistory, useLocation} from 'react-router-dom';

import axios from "axios";

import UserPageLayout from "../components/userPageComponent";

const userContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/users';
const baseURL2 = 'https://jsonplaceholder.typicode.com/posts';

const UserPageContainer = () => {

  const [users, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
      setIsLoadingUserInfo(false);
    });
  }, []);

  useEffect(() => {
    axios.get(baseURL2).then((response) => {
      setPosts(response.data);
      setIsLoadingPosts(false);
    });
  }, []);

  return (
      <userContext.Provider value={{users, posts}}>
        <Layout
            isLoadingUserInfo={isLoadingUserInfo}
            isLoadingPosts={isLoadingPosts}
        />
      </userContext.Provider>
  );
};

const Layout = ({isLoadingUserInfo, isLoadingPosts}) => {

  const users = useContext(userContext);
  const posts = useContext(userContext);

  const history = useHistory();

  const location = useLocation();
  const elements = location.pathname.split('/');
  const id = elements[elements.length-1];

  const postsOfSelectedUser = posts.posts.reduce((result, post) => {
    if (post.userId === users.users[id-1]?.id ) {
      result.push(post)
    }
    return result
  }, [])

  const handleGoToPost = useCallback((post) => {
    history.push(`/posts/${post}`);
  }, []);

  return (
      <UserPageLayout
          users={users}
          id={id}
          postsOfSelectedUser={postsOfSelectedUser}
          handleGoToPost={handleGoToPost}
          isLoadingUserInfo={isLoadingUserInfo}
          isLoadingPosts={isLoadingPosts}
      />
  )
}

export default UserPageContainer;


