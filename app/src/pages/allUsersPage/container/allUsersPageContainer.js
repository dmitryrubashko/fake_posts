import {useState, useEffect, createContext, useContext, useCallback} from 'react';

import {useHistory} from 'react-router-dom';

import axios from "axios";

import AllUsersPageLayout from "../components/allUsersPageComponent";

const usersContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const AllUsersPageContainer = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <usersContext.Provider value={users}>
      <Layout/>
    </usersContext.Provider>
  );
};

const Layout = () => {

  const users = useContext(usersContext)
  const history = useHistory();

  const handleGoToDetails = useCallback((user) => {
    history.push(`/users/${user}`);
  }, []);

  return (
      <AllUsersPageLayout
          users={users}
          handleGoToDetails={handleGoToDetails}
      />
  )
}

export default AllUsersPageContainer;
