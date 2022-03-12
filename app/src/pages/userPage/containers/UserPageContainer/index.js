import {useCallback, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import UserPageLayout from "../../components/UserPageLayout";
import {getPosts} from "../../../../shared/actions/postsAction";
import {getUsers} from "../../../../shared/actions/usersAction";

const UserPageContainer = () => {

  const dispatch = useDispatch();
  const userPageList = useSelector(state => state.userPageList);
  const {posts, isLoadingPosts, postsError, users, isLoadingUsers, usersError} = userPageList;

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch])

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