import PostPageLayout from "../components/postPageComponent";

import {useState, useEffect, createContext, useContext, useCallback} from 'react';

import {useLocation} from 'react-router-dom';

import axios from "axios";

const userContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/posts';
const baseURL2 = 'https://jsonplaceholder.typicode.com/comments';

const PostPageContainer = () => {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(true);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
      setIsLoadingPosts(false);
    });
  }, []);

  useEffect(() => {
    axios.get(baseURL2).then((response) => {
      setComments(response.data);
      setIsLoadingComments(false);
    });
  }, []);

  return (
      <userContext.Provider value={{posts, comments}}>
        <Layout
            isLoadingPosts={isLoadingPosts}
            isLoadingComments={isLoadingComments}
        />
      </userContext.Provider>
  );
};

const Layout = ({isLoadingPosts, isLoadingComments}) => {

  const posts = useContext(userContext);
  const comments = useContext(userContext);

  const location = useLocation();
  const elements = location.pathname.split('/');
  const id = elements[elements.length-1];

  const postsOfSelectedUser = posts.posts.reduce((result, post) => {
    if (post.id === posts.posts[id-1]?.id ) {
      result.push(post)
    }
    return result
  }, [])

  const commentsOfSelectedUser = comments.comments.reduce((result, comment) => {
    if (comment.postId === comments.comments[id-1]?.id ) {
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
      />
  )
}

export default PostPageContainer;



