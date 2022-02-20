// import AllUsersPageLayout from "../components/allUsersPageComponent";
//
// const AllUsersPageContainer = () => {
//   return (
//     <AllUsersPageLayout
//
//     />
//   );
// };
//
// export default AllUsersPageContainer;

import {useState, useEffect, createContext, useContext} from 'react';

import axios from "axios";

const userContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const AllUsersPageContainer = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <userContext.Provider value={users}>
      <ChildComponent1 />
    </userContext.Provider>
  );
};

const ChildComponent1 = () => {

  return (
    <>
      <ChildComponent2 />
    </>

  )
}

const ChildComponent2 = () => {

  const users = useContext(userContext)

  return (
    <div>
      {users &&
      users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  )
}

export default AllUsersPageContainer;