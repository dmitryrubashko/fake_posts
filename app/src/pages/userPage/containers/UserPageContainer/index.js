import {useState, useEffect, createContext, useContext, useCallback} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import UserPageLayout from "../../components/UserPageLayout";
import Api from "../../../../shared/commonComponents/api";

const userContext = createContext(null);

const urlDataUsers = Api.get(`/users`);
const urlDataPosts = Api.get(`/posts`);

const UserPageContainer = () => {

  const [users, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    urlDataUsers.then((response) => {
      setUser(response.data);
      setIsLoadingUserInfo(false);
    })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    urlDataPosts.then((response) => {
      setPosts(response.data);
      setIsLoadingPosts(false);
    })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
      <userContext.Provider value={{users, posts}}>
        <Layout
            isLoadingUserInfo={isLoadingUserInfo}
            isLoadingPosts={isLoadingPosts}
            error={error}
        />
      </userContext.Provider>
  );
};

const Layout = ({isLoadingUserInfo, isLoadingPosts, error}) => {

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
          error={error}
      />
  )
}

export default UserPageContainer;


