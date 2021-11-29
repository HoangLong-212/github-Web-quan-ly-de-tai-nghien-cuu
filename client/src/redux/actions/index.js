import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

//#region User
export const getUsers = createActions({
  getUsersRequest: undefined,
  getUsersSuccess: (payload) => payload,
  getUsersFailure: (err) => err,
});

export const createUsers = createActions({
  createUsersRequest: (payload) => payload,
  createUsersSuccess: (payload) => payload,
  createUsersFailure: (err) => err,
});

export const updateUsers = createActions({
  updateUsersRequest: (payload) => payload,
  updateUsersSuccess: (payload) => payload,
  updateUsersFailure: (err) => err,
});
//#endregion
