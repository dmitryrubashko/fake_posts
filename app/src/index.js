import {useState, useEffect, createContext, useContext, useCallback} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import Routes from './shared/routes/routes';
import MainLayout from "./shared/commonComponents/MainLayout";
import Context from "./shared/commonComponents/Context";
import Api from "./shared/commonComponents/api";

import './index.css';

const dataUsers = Api.get(`/users`);
const dataPosts = Api.get(`/posts`);
const dataComments = Api.get(`/comments`);

function ContextInfo() {
    const [users, setUser] = useState([]);
     const [posts, setPosts] = useState([]);
     const [comments, setComments] = useState([]);

     useEffect(() => {
         dataUsers.then((response) => {
             setUser(response.data);
         })
     }, []);

     useEffect(() => {
         dataPosts.then((response) => {
             setPosts(response.data);
         })
     }, []);

     useEffect(() => {
         dataComments.then((response) => {
             setComments(response.data);
         })
     }, []);

    return (
        <React.StrictMode>
            <Context.Provider value={{users, posts, comments}}>
                <BrowserRouter>
                    <MainLayout>
                        <Routes/>
                    </MainLayout>
                </BrowserRouter>
            </Context.Provider>
        </React.StrictMode>
    )
}

ReactDOM.render(
    <ContextInfo/>,
  document.getElementById('root')
);

