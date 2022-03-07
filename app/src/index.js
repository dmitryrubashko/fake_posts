import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import Context from "./shared/commonComponents/Context";
import Api from "./shared/commonComponents/api";
import App from "./App";

import './index.css';

const dataUsers = Api.get(`/users`);
const dataPosts = Api.get(`/posts`);
const dataComments = Api.get(`/comments`);

function ContextInfo() {
     const [users, setUser] = useState([]);
     const [posts, setPosts] = useState([]);
     const [comments, setComments] = useState([]);
     const [isLoadingUsers, setIsLoadingUsers] = useState(true);
     const [isLoadingPosts, setIsLoadingPosts] = useState(true);
     const [isLoadingComments, setIsLoadingComments] = useState(true);
     const [usersError, setUsersError] = useState(null);
     const [postsError, setPostsError] = useState(null);
     const [commentsError, setCommentsError] = useState(null);

     useEffect(() => {
       dataUsers.then((response) => {
         setUser(response.data);
         setIsLoadingUsers(false);
       })
         .catch((error) => {
           setUsersError(error);
         });
     }, []);

    useEffect(() => {
      dataPosts.then((response) => {
        setPosts(response.data)
        setIsLoadingPosts(false);
      })
        .catch((error) => {
          setPostsError(error);
        });
    }, [])

     useEffect(() => {
         dataComments.then((response) => {
             setComments(response.data);
             setIsLoadingComments(false)
         })
           .catch((error) => {
             setCommentsError(error);
           });
     }, []);

      return (
          <React.StrictMode>
              <Context.Provider value={{
                users,
                posts,
                comments,
                isLoadingUsers,
                isLoadingPosts,
                isLoadingComments,
                usersError,
                postsError,
                commentsError,
              }}>
                  <App/>
              </Context.Provider>
          </React.StrictMode>
      )
}

ReactDOM.render(
    <ContextInfo/>,
  document.getElementById('root')
);

