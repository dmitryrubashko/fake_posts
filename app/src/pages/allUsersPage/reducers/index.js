import {GET_USERS, USERS_ERROR} from '../../../shared/types';

const initialState = {
  users: [],
  isLoading: true,
}

const AllUsersPageReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      }
    case USERS_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      }
    default: return state
  }
};

export default AllUsersPageReducer;
