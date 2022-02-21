import {useState, useEffect, createContext, useContext} from 'react';

import axios from "axios";

import UserPageLayout from "../components/userPageComponent";

const userContext = createContext(null);

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const UserPageContainer = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
      <userContext.Provider value={user}>
        <Layout/>
      </userContext.Provider>
  );
};

const Layout = () => {

  const user = useContext(userContext);

  return (
      <UserPageLayout
          user={user}
      />
  )
}

export default UserPageContainer;


