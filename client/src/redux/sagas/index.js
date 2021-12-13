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

function* findPostSaga(action) {
  try {
    console.log('[SAGA]',action.payload);
    const Posts = yield call(api.findPosts, action.payload);
    yield put(actions.findPosts.findPostsSuccess(Posts.data));
  } catch (error) {
    console.log("error", error.response.data);
      yield put(actions.findPosts.findPostsFailure(error.response.data));
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
//Posts

function* mySaga() {
  //Login
  yield takeLatest(actions.login.loginRequest, loginSaga);

  //Posts
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);
  yield takeLatest(actions.findPosts.findPostsRequest, findPostSaga);
  //Posts
}

// generator function ES6

export default mySaga;
