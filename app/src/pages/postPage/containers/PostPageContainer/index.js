import {useState, useEffect, createContext, useContext} from 'react';
import {useLocation} from 'react-router-dom';

import PostPageLayout from "../../components/PostPageLayout";
import Api from "../../../../shared/commonComponents/api";

const userContext = createContext(null);

const urlDataPosts = Api.get(`/posts`);
const urlDataComments = Api.get(`/comments`);

const PostPageContainer = () => {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    urlDataPosts.then((response) => {
      setPosts(response.data);
      setIsLoadingPosts(false);
    })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    urlDataComments.then((response) => {
      setComments(response.data);
      setIsLoadingComments(false);
    })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
      <userContext.Provider value={{posts, comments}}>
        <Layout
            isLoadingPosts={isLoadingPosts}
            isLoadingComments={isLoadingComments}
            error={error}
        />
      </userContext.Provider>
  );
};

const Layout = ({isLoadingPosts, isLoadingComments, error}) => {

  const posts = useContext(userContext);
  const comments = useContext(userContext);

  const location = useLocation();
  const elements = location.pathname.split('/');
  const id = elements[elements.length-1];

  const postsOfSelectedUser = posts.posts.reduce((result, post) => {
    if (post.id === posts.posts[id-1]?.id) {
      result.push(post)
    }
    return result
  }, [])

  const commentsOfSelectedUser = comments.comments.reduce((result, comment) => {
    if (comment.postId === comments.comments[id-1]?.id) {
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
          error={error}
      />
  )
}

export default PostPageContainer;



