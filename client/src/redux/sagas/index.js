import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api"
import { useSelector } from "react-redux";

//Login
function* loginSaga(action) {
  try {
    //console.log('saga',action.payload);
    const Logins = yield call(api.login, action.payload);
    yield put(actions.login.loginSuccess(Logins.data));
  } catch (error) {
    if (error.response.data) {
      // console.log("error", error.response.data);
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
    // console.log("error", error.response.data);
      yield put(actions.getPosts.getPostsFailure(error.response.data));
  }
}

function* findPostSaga(action) {
  try {
    const Posts = yield call(api.findPosts, action.payload);
    yield put(actions.findPosts.findPostsSuccess(Posts.data));
  } catch (error) {
    // console.log("error", error.response.data);
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
//#region Info
function* fetchInfoSaga(action) {
  try {
    const Info = yield call(api.fetchInfo);
    console.log("[Infos]", Info);
    yield put(actions.getInfo.getInfoSuccess(Info.data));
  } catch (error) {
    yield put(actions.getInfo.getInfoFailure(error));
  }
}

function* createInfoSaga(action) {
  try {
    const Info = yield call(api.createInfo, action.payload);
    console.log("dataaa", action.payload)
    yield put(actions.createInfo.createInfoSuccess(Info.data));
  } catch (error) {
    console.log("errorrr", error.response.data);
    yield put(
      actions.createInfo.createInfoFailure(error.response.data)
    );
  }
}

function* updateInfoSaga(action) {
  try {
    const Info = yield call(api.updateInfo, action.payload);
    yield put(actions.updateInfo.updateInfoSuccess(Info.data));
  } catch (error) {
    yield put(
      actions.updateInfo.updateInfoFailure(error.response.data)
    );
  }
}


//#region Faculty
function* fetchFacultySaga(action) {
  try {
    const Faculty = yield call(api.fetchFaculty);
    console.log("[Infos]", Faculty);
    yield put(actions.getFaculty.getFacultySuccess(Faculty.data));
  } catch (error) {
    yield put(actions.getFaculty.getFacultyFailure(error));
  }
}

function* createFacultySaga(action) {
  try {
    const Faculty = yield call(api.createFaculty, action.payload);
    // console.log("F", action.payload)
    yield put(actions.createFaculty.createFacultySuccess(Faculty.data));
  } catch (error) {
    // console.log("errorrr", error.response.data);
    yield put(
      actions.createFaculty.createFacultyFailure(error.response.data)
    );
  }
}

function* updateFacultySaga(action) {
  try {
    const Faculty = yield call(api.updateFaculty, action.payload);
    console.log("fff", action.payload)
    console.log("vvv", Faculty)
    yield put(actions.updateFaculty.updateFacultySuccess(Faculty));
  } catch (error) {
       console.log("errorrr", error.response.data);
    yield put(
      actions.updateFaculty.updateFacultyFailure(error.response.data)
    );
  }
}


//#region TaiKhoan
function* fetchUserSaga(action) {
    try {
      const Users = yield call(api.fetchUser);
      console.log("[Lấy User thành công]", Users);
      yield put(actions.getUser.getUserSuccess(Users.data));
    } catch (error) {
      yield put(actions.getUser.getUserFailure(error));
    }
  }
  function* createUserSaga(action) {
    try {
      console.log("đã vào saga")
      const User = yield call(api.createUser, action.payload);
      yield put(actions.createUser.createUserSuccess(User.data));
    } catch (error) {
      yield put(
        actions.createUser.createUserFailure(error.response.data)
      );
    }
  }
  
  function* updateUserSaga(action) {
    try {
      const User = yield call(api.updateUser, action.payload);
      yield put(actions.updateUser.updateUserSuccess(User.data));
    } catch (error) {
      yield put(
        actions.updateInfo.updateUserFailure(error.response.data)
      );
    }
  }
//   // #endregion

function* mySaga() {
  //Login
  yield takeLatest(actions.login.loginRequest, loginSaga);
  
  // User
  yield takeLatest(
    actions.getUser.getUserRequest,
    fetchUserSaga
  );

  yield takeLatest(
    actions.createUser.createUserRequest,
    createUserSaga
  );

  yield takeLatest(
    actions.updateUser.updateUserRequest,
    updateUserSaga
  );

  //Posts
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);
  yield takeLatest(actions.findPosts.findPostsRequest, findPostSaga);


  //region Info
  yield takeLatest(
    actions.getInfo.getInfoRequest,
    fetchInfoSaga
  );

  yield takeLatest(
    actions.createInfo.createInfoRequest,
    createInfoSaga
  );

  yield takeLatest(
    actions.updateInfo.updateInfoRequest,
    updateInfoSaga
  );

    //region Faculty
  yield takeLatest(
    actions.getFaculty.getFacultyRequest,
    fetchFacultySaga
  );

  yield takeLatest(
    actions.createFaculty.createFacultyRequest,
    createFacultySaga
  );

  yield takeLatest(
    actions.updateFaculty.updateFacultyRequest,
    updateFacultySaga
  );
}

// generator function ES6

export default mySaga;
