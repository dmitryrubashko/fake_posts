import {useState, useEffect, createContext, useContext, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import AllUsersPageLayout from "../../components/AllUsersPageLayout";
import Api from "../../../../shared/commonComponents/api";

const userContext = createContext(null);

const urlDataUsers = Api.get(`/users`);

const AllUsersPageContainer = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    urlDataUsers.then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <userContext.Provider value={users}>
      <Layout
        error={error}
        isLoading={isLoading}
      />
    </userContext.Provider>
  );
};

const Layout = ({isLoading, error}) => {

  const users = useContext(userContext);
  const history = useHistory();

  const handleGoToDetails = useCallback((user) => {
    history.push(`/users/${user}`);
  }, []);

  return (
      <AllUsersPageLayout
          users={users}
          handleGoToDetails={handleGoToDetails}
          isLoading={isLoading}
          error={error}
      />
  )
}

export default AllUsersPageContainer;
