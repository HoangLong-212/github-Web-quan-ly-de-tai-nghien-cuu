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

//region User

export const getUser = createActions({
  getUserRequest: undefined,
  getUserSuccess: (payload) => payload,
  getUserFailure: (err) => err,
});

export const createUser = createActions({
  createUserRequest: (payload) => payload,
  createUserSuccess: (payload) => payload,
  createUserFailure: (err) => err,
});

export const updateUser = createActions({
  updateUserRequest: undefined,
  updateUserSuccess: (payload) => payload,
  updateUserFailure: (err) => err,
});

export const showUserModal = createAction("SHOW_USER_MODAL");
export const hideUserModal = createAction("HIDE_USER_MODAL");

export const showUpdateUserModal = createAction("SHOW_UPDATE_USER_MODAL");
export const hideUpdateUserModal = createAction("HIDE_UPDATE_USER_MODAL");

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

//region Khoa
export const getFaculty = createActions({
  getFacultyRequest: undefined,
  getFacultySuccess: (payload) => payload,
  getFacultyFailure: (err) => err,
});

export const createFaculty = createActions({
  createFacultyRequest: (payload) => payload,
  createFacultySuccess: (payload) => payload,
  createFacultyFailure: (err) => err,
});

export const updateFaculty = createActions({
  updateFacultyRequest: (payload) => payload,
  updateFacultySuccess: (payload) => payload,
  updateFacultyFailure: (err) => err,
});

export const showFacultyModal = createAction("SHOW_FACULTY_MODAL");
export const hideFacultyModal = createAction("HIDE_FACULTY_MODAL");


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

export const updateProjects = createActions({
  updateProjectsRequest: (payload) => payload,
  updateProjectsSuccess: (payload) => payload,
  updateProjectsFailure: (err) => err,
});

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

//Extend
export const getExtends = createActions({
  getExtendsRequest: undefined,
  getExtendsSuccess: (payload)=>payload,
  getExtendsFailure: (err)=>err,
})
export const createExtends = createActions({
  createExtendsRequest: (payload)=>payload,
  createExtendsSuccess: (payload)=>payload,
  createExtendsFailure: (err)=>err,
})
export const updateExtends = createActions({
  updateExtendsRequest: (payload) => payload,
  updateExtendsSuccess: (payload) => payload,
  updateExtendsFailure: (err) => err,
});
//Cancel
export const getCancels = createActions({
  getCancelsRequest: undefined,
  getCancelsSuccess: (payload)=>payload,
  getCancelsFailure: (err)=>err,
})
export const createCancels = createActions({
  createCancelsRequest: (payload)=>payload,
  createCancelsSuccess: (payload)=>payload,
  createCancelsFailure: (err)=>err,
})
export const updateCancels = createActions({
  updateCancelsRequest: (payload) => payload,
  updateCancelsSuccess: (payload) => payload,
  updateCancelsFailure: (err) => err,
});
//Council
export const getCouncils = createActions({
  getCouncilsRequest: undefined,
  getCouncilsSuccess: (payload)=>payload,
  getCouncilsFailure: (err)=>err,
})
export const createCouncils = createActions({
  createCouncilsRequest: (payload)=>payload,
  createCouncilsSuccess: (payload)=>payload,
  createCouncilsFailure: (err)=>err,
})
export const updateCouncils = createActions({
  updateCouncilsRequest: (payload) => payload,
  updateCouncilsSuccess: (payload) => payload,
  updateCouncilsFailure: (err) => err,
});
//Report
export const getReports = createActions({
  getReportsRequest: undefined,
  getReportsSuccess: (payload)=>payload,
  getReportsFailure: (err)=>err,
})
export const createReports = createActions({
  createReportsRequest: (payload)=>payload,
  createReportsSuccess: (payload)=>payload,
  createReportsFailure: (err)=>err,
})
export const updateReports= createActions({
  updateReportsRequest: (payload) => payload,
  updateReportsSuccess: (payload) => payload,
  updateReportsFailure: (err) => err,
});