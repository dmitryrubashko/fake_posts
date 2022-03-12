import {useLocation} from 'react-router-dom';

import PostPageLayout from "../../components/PostPageLayout";
import {getPosts} from "../../../../shared/actions/postsAction";
import {getComments} from "../../../../shared/actions/commentsAction";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const PostPageContainer = () => {

  const dispatch = useDispatch();
  const postPageList = useSelector(state => state.postPageList);
  const {posts, isLoadingPosts, postsError, comments, isLoadingComments, commentsError} = postPageList;

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch])

  const location = useLocation();
  const elements = location.pathname.split('/');
  const id = elements[elements.length-1];

  const postsOfSelectedUser = posts.reduce((result, post) => {
    if (post.id === posts[id-1]?.id) {
      result.push(post)
    }
    return result
  }, [])

  const commentsOfSelectedUser = comments.reduce((result, comment) => {
    if (comment.postId === comments[id-1]?.id) {
      result.push(comment)
    }
    return result
  }, [])

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
  )
}

export default PostPageContainer;



