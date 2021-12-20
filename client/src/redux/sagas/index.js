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
    yield put(
      actions.updatePosts.updatePostsFailure(err.response.data)
    );
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
}

// generator function ES6

export default mySaga;
