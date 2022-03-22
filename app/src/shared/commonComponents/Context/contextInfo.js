import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import GetData from "../../api";
import Context from "./context";
import MainLayout from "../MainLayout";
import Routes from "../../routes/routes";

const ContextInfo = () => {
  const [users, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [usersError, setUsersError] = useState(null);
  const [postsError, setPostsError] = useState(null);
  const [commentsError, setCommentsError] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    GetData.dataUsers()
      .then((response) => {
        setUser(response.data);
        setIsLoadingUsers(false);
      })
      .catch((error) => {
        setUsersError(error);
      });
  }, []);

  useEffect(() => {
    GetData.dataPosts()
      .then((response) => {
        setPosts(response.data);
        setIsLoadingPosts(false);
      })
      .catch((error) => {
        setPostsError(error);
      });
  }, []);

  useEffect(() => {
    GetData.dataComments()
      .then((response) => {
        setComments(response.data);
        setIsLoadingComments(false);
      })
      .catch((error) => {
        setCommentsError(error);
      });
  }, []);

  return (
    <React.StrictMode>
      <Context.Provider
        value={{
          users,
          posts,
          comments,
          isLoadingUsers,
          isLoadingPosts,
          isLoadingComments,
          usersError,
          postsError,
          commentsError,
          isAuth,
          setIsAuth
        }}
      >
        <BrowserRouter>
          <MainLayout>
            <Routes />
          </MainLayout>
        </BrowserRouter>
      </Context.Provider>
    </React.StrictMode>
  );
};
export default ContextInfo;
