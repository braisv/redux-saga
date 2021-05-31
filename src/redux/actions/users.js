import * as type from "../types";

export const getUsers = (params) => {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: params,
  };
};
