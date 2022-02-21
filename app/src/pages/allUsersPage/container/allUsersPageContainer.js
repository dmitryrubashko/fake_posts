import {useState, useEffect, createContext, useContext} from 'react';

import axios from "axios";

import AllUsersPageLayout from "../components/allUsersPageComponent";

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
      <Layout/>
    </userContext.Provider>
  );
};

const Layout = () => {

  const users = useContext(userContext)

  return (
      <AllUsersPageLayout
          users={users}
      />
  )
}

export default AllUsersPageContainer;