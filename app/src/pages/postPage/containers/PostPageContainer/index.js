import {useContext} from 'react';
import {useLocation} from 'react-router-dom';

import PostPageLayout from "../../components/PostPageLayout";
import Context from "../../../../shared/commonComponents/Context/context";

const PostPageContainer = () => {
  const {posts, isLoadingPosts, postsError, comments, isLoadingComments, commentsError} = useContext(Context);

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



