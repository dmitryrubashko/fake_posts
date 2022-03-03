// import {useState, useEffect, createContext, useContext, useCallback} from 'react';
//
// import Api from "../api";
//
// const context = createContext(null);
//
// const dataUsers = Api.get(`/users`);
// const dataPosts = Api.get(`/posts`);
// const dataComments = Api.get(`/comments`);
//
// const Context = () => {
//
//     const [users, setUser] = useState([]);
//     const [posts, setPosts] = useState([]);
//     const [comments, setComments] = useState([]);
//
//     useEffect(() => {
//         dataUsers.then((response) => {
//             setUser(response.data);
//         })
//     }, []);
//
//     useEffect(() => {
//         dataPosts.then((response) => {
//             setPosts(response.data);
//         })
//     }, []);
//
//     useEffect(() => {
//         dataComments.then((response) => {
//             setComments(response.data);
//         })
//     }, []);
//
//     return (
//         <context.Provider value={{users, posts, comments}}>
//
//         </context.Provider>
//     );
// };
//
// export default Context;
import {useState, useEffect, createContext, useContext, useCallback} from 'react';


import React from 'react'
const Context = React.createContext(null);
export default Context