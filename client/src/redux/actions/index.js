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

//#endregion 
export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload)=>payload,
  getPostsFailure: (err)=>err,
})

export const findPosts = createActions({
  findPostsRequest: (payload)=>payload,
  findPostsSuccess: (payload)=>payload,
  findPostsFailure: (err)=>err,
})

export const createPosts = createActions({
  createPostsRequest: (payload)=>payload,
  createPostsSuccess: (payload)=>payload,
  createPostsFailure: (err)=>err,
})

//#region Post

//PostModal
export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

