import { createActions, createAction } from "redux-actions";

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

//region info GiangVien
export const getInfo = createActions({
  getInfoRequest: undefined,
  getInfoSuccess: (payload) => payload,
  getInfoFailure: (err) => err,
});

export const createInfo = createActions({
  createInfoRequest: (payload) => payload,
  createInfoSuccess: (payload) => payload,
  createInfoFailure: (err) => err,
});

export const updateInfo = createActions({
  updateInfoRequest: undefined,
  updateInfoSuccess: (payload) => payload,
  updateInfoFailure: (err) => err,
});

export const showInfoModal = createAction("SHOW_INFO_MODAL");
export const hideInfoModal = createAction("HIDE_INFO_MODAL");
//#endregion 
