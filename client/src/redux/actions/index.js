import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

//#region Login

export const login = createActions({
  loginRequest: (payload) => payload,
  loginSuccess: (payload) => payload,
  loginFailure: (err) => err,
  logoutRequest: undefined,
});

//#endregion 
