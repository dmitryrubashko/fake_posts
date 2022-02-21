import {useState, useEffect, createContext, useContext} from 'react';

import {useLocation} from 'react-router-dom';

import axios from "axios";

import UserPageLayout from "../components/userPageComponent";

const userContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const UserPageContainer = () => {

  const [users, setUser] = useState([]);


  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
      <userContext.Provider value={users}>
        <Layout/>
      </userContext.Provider>
  );
};

const Layout = () => {

  const users = useContext(userContext);

  const location = useLocation();
  const split = location.pathname.split('/');
  const id = split[split.length-1];

  return (
      <UserPageLayout
          users={users}
          id={id}
      />
  )
}

export default UserPageContainer;



