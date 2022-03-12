import {useCallback, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import AllUsersPageLayout from "../../components/AllUsersPageLayout";
import {getUsers} from "../../../../shared/actions/usersAction";

const AllUsersPageContainer = () => {

  const dispatch = useDispatch();
  const allUsersPageList = useSelector(state => state.allUsersPageList);
  const {isLoading, error, users} = allUsersPageList;

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const history = useHistory();

  const handleGoToDetails = useCallback((user) => {
    history.push(`/users/${user}`);
  }, []);

  return (
    <AllUsersPageLayout
      isLoading={isLoading}
      error={error}
      users={users}
      handleGoToDetails={handleGoToDetails}
    />
  )
}

export default AllUsersPageContainer;