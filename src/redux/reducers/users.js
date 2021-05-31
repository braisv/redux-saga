import * as type from "../types";

const initialState = {
  users: [],
  currentPage: 1,
  totalPages: 1,
  totalUsers: 0,
  loading: true,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users.data,
        currentPage: action.users.page,
        totalPages: action.users.total_pages,
        totalUsers: action.users.total,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default users;
