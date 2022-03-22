import { useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import { getPosts } from "../../../../shared/actions/postsAction";
import { getUsers } from "../../../../shared/actions/usersAction";
import UserPageLayout from "../../components/UserPageLayout";

const Word = styled.span`
  text-transform: capitalize;
`;

const UserPageContainer = () => {
  const dispatch = useDispatch();
  const userPageList = useSelector((state) => state.userPageList);
  const {
    posts,
    isLoadingPosts,
    postsError,
    users,
    isLoadingUsers,
    usersError,
  } = userPageList;

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  const history = useHistory();

  const location = useLocation();
  const elements = location.pathname.split("/");
  const id = elements[elements.length - 1];

  const postsOfSelectedUser = posts.reduce((result, post) => {
    if (post.userId === users[id - 1]?.id) {
      result.push(post);
    }
    return result;
  }, []);

  const handleGoToPost = useCallback((post) => {
    history.push(`/posts/${post}`);
  }, []);

  const user = users[id - 1];

  const flatObj = (obj) => {
    return Object.entries(obj).map((attr) => {
      if (typeof attr[1] === "string" || typeof attr[1] === "number") {
        return (
          <div key={uuidv4()}>
            <Word>{attr[0]}</Word> : {attr[1]}
          </div>
        );
      } else {
        return flatObj(attr[1]);
      }
    });
  };

  return (
    <UserPageLayout
      users={users}
      postsOfSelectedUser={postsOfSelectedUser}
      handleGoToPost={handleGoToPost}
      isLoadingUsers={isLoadingUsers}
      isLoadingPosts={isLoadingPosts}
      usersError={usersError}
      postsError={postsError}
      user={user}
      flatObj={flatObj}
    />
  );
};
export default UserPageContainer;
