import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../../../shared/store/actions/postsAction";
import { getComments } from "../../../../shared/store/actions/commentsAction";
import PostPageLayout from "../../components/PostPageLayout";

const PostPageContainer = () => {
  const dispatch = useDispatch();
  const {
    posts,
    isLoadingPosts,
    postsError,
    comments,
    isLoadingComments,
    commentsError,
  } = useSelector((state) => state.postPageList);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch]);

  const location = useLocation();
  const elements = location.pathname.split("/");
  const id = elements[elements.length - 1];

  const postsOfSelectedUser = posts.reduce((result, post) => {
    if (post.id === posts[id - 1]?.id) {
      result.push(post);
    }
    return result;
  }, []);

  const commentsOfSelectedUser = comments.reduce((result, comment) => {
    if (comment.postId === comments[id - 1]?.id) {
      result.push(comment);
    }
    return result;
  }, []);

  return (
    <PostPageLayout
      id={id}
      postsOfSelectedUser={postsOfSelectedUser}
      commentsOfSelectedUser={commentsOfSelectedUser}
      isLoadingPosts={isLoadingPosts}
      isLoadingComments={isLoadingComments}
      postsError={postsError}
      commentsError={commentsError}
    />
  );
};
export default PostPageContainer;
