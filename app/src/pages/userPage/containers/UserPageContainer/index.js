import {useContext, useCallback} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import UserPageLayout from "../../components/UserPageLayout";
import Context from "../../../../shared/commonComponents/Context";

const UserPageContainer = () => {

  const {users, isLoadingUsers, usersError, posts, isLoadingPosts, postsError} = useContext(Context);
  const history = useHistory();

  const location = useLocation();
  const elements = location.pathname.split('/');
  const id = elements[elements.length-1];

  const postsOfSelectedUser = posts.reduce((result, post) => {
    if (post.userId === users[id-1]?.id) {
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
      isLoadingUsers={isLoadingUsers}
      isLoadingPosts={isLoadingPosts}
      usersError={usersError}
      postsError={postsError}
    />
  )
}

export default UserPageContainer;