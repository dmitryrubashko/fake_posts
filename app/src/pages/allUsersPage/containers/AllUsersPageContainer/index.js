import {useContext, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import AllUsersPageLayout from "../../components/AllUsersPageLayout";
import Context from "../../../../shared/commonComponents/Context/context";

const AllUsersPageContainer = () => {

  const {users, isLoadingUsers, usersError} = useContext(Context);
  const history = useHistory();

  const handleGoToDetails = useCallback((user) => {
    history.push(`/users/${user}`);
  }, []);

  return (
      <AllUsersPageLayout
          users={users}
          handleGoToDetails={handleGoToDetails}
          isLoadingUsers={isLoadingUsers}
          usersError={usersError}
      />
  )
}

export default AllUsersPageContainer;

