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

export const createPosts = createActions({
  createPostsRequest: (payload)=>payload,
  createPostsSuccess: (payload)=>payload,
  createPostsFailure: (err)=>err,
})

export const deletePosts = createActions({
  deletePostsRequest: (payload) => payload,
  deletePostsSuccess: (payload) => payload,
  deletePostsFailure: (err) => err,
});

export const updatePosts = createActions({
  updatePostsRequest: (payload) => payload,
  updatePostsSuccess: (payload) => payload,
  updatePostsFailure: (err) => err,
});
//#region Post

//PostModal
export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

// Project
export const getProjects = createActions({
  getProjectsRequest: undefined,
  getProjectsSuccess: (payload)=>payload,
  getProjectsFailure: (err)=>err,
})
// Đăng ký đề tài
export const showProjectModal = createAction("SHOW_CREATE_PROJECT_MODAL");
export const hideProjectModal = createAction("HIDE_CREATE_PROJECT_MODAL");