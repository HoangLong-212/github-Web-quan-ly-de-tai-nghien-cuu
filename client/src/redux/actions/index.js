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
export const createProjects = createActions({
  createProjectsRequest: (payload)=>payload,
  createProjectsSuccess: (payload)=>payload,
  createProjectsFailure: (err)=>err,
})

// Đăng ký đề tài
export const showProjectModal = createAction("SHOW_CREATE_PROJECT_MODAL");
export const hideProjectModal = createAction("HIDE_CREATE_PROJECT_MODAL");

// Team
export const getTeams = createActions({
  getTeamsRequest: undefined,
  getTeamsSuccess: (payload)=>payload,
  getTeamsFailure: (err)=>err,
})
export const createTeams = createActions({
  createTeamsRequest: (payload)=>payload,
  createTeamsSuccess: (payload)=>payload,
  createTeamsFailure: (err)=>err,
})