import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

//Login
function* loginSaga(action) {
  try {
    //console.log('saga',action.payload);
    const Logins = yield call(api.login, action.payload);
    yield put(actions.login.loginSuccess(Logins.data));
  } catch (error) {
    if (error.response.data) {
      console.log("error", error.response.data);
      yield put(actions.login.loginFailure(error.response.data));
    }
  }
}

//Login

//Posts
function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (error) {
    console.log("error", error.response.data);
    yield put(actions.getPosts.getPostsFailure(error.response.data));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPosts, action.payload);
    yield put(actions.createPosts.createPostsSuccess(post.data));
  } catch (error) {
    console.log("error", error.response.data);
    yield put(actions.createPosts.createPostsFailure(error.response.data));
  }
}

function* deletePostSaga(action) {
  try {
    const Posts = yield call(api.deletePosts, action.payload);
    yield put(actions.deletePosts.deletePostsSuccess(Posts.data._id));
  } catch (error) {
    console.log("error", error.response.data);
    yield put(actions.deletePosts.deletePostsFailure(error.response.data));
  }
}

function* updatePostSaga(action) {
  try {
    const Posts = yield call(api.updatePosts, action.payload);
    yield put(actions.updatePosts.updatePostsSuccess(Posts.data));
  } catch (err) {
    yield put(actions.updatePosts.updatePostsFailure(err.response.data));
  }
}
//Project
function* fetchProjectSaga(action) {
  try {
    const projects = yield call(api.fetchProjects);
    yield put(actions.getProjects.getProjectsSuccess(projects.data));
  } catch (error) {
    console.log("error", error.response.data);
    yield put(actions.getProjects.getProjectsFailure(error.response.data));
  }
}
//Posts

//#region Info
function* fetchInfoSaga(action) {
  try {
    const Info = yield call(api.fetchInfo);
    console.log("[Infos]", Info);
    yield put(actions.getInfo.getInfoSuccess(Info.data));
  } catch (err) {
    yield put(actions.getInfo.getInfoFailure(err));
  }
}

function* createInfoSaga(action) {
  try {
    const Info = yield call(api.createInfo, action.payload);
    yield put(actions.createInfo.createInfoSuccess(Info.data));
  } catch (error) {
    yield put(actions.createInfo.createInfoFailure(error.response.data));
  }
}

function* updateInfoSaga(action) {
  try {
    const Info = yield call(api.updateInfo, action.payload);
    yield put(actions.updateInfo.updateInfoSuccess(Info.data));
  } catch (error) {
    yield put(actions.updateInfo.updateInfoFailure(error.response.data));
  }
}

//#region TaiKhoan
// function* fetchTaiKhoansSaga(action) {
//     try {
//       const TaiKhoans = yield call(api.fetchTaiKhoans);
//       console.log("[TaiKhoans]", TaiKhoans);
//       yield put(actions.getTaiKhoans.getTaiKhoansSuccess(TaiKhoans.data));
//     } catch (err) {
//       console.err(err);
//       yield put(actions.getTaiKhoans.getTaiKhoansFailure(err));
//     }
//   }
//   // #endregion

function* mySaga() {
  //Login
  yield takeLatest(actions.login.loginRequest, loginSaga);

  //Posts
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);
  yield takeLatest(actions.deletePosts.deletePostsRequest, deletePostSaga);
  yield takeLatest(actions.updatePosts.updatePostsRequest, updatePostSaga);

  //Projects
  yield takeLatest(actions.getProjects.getProjectsRequest, fetchProjectSaga);

  //Posts

  //region Info
  yield takeLatest(actions.getInfo.getInfoRequest, fetchInfoSaga);

  yield takeLatest(actions.createInfo.createInfoRequest, createInfoSaga);

  yield takeLatest(actions.updateInfo.updateInfoRequest, updateInfoSaga);
}

// generator function ES6

export default mySaga;
