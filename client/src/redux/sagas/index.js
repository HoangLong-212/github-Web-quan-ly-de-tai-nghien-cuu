import { takeLatest, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchUserSaga(action) {
    const users = yield call(api.fetchUser);
    console.log('[users]',users); 
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
  yield takeLatest(actions.getUsers.getUsersRequest, fetchUserSaga);
//   yield takeLatest(actions.createPost.createPostRequest, fetchUserSaga);
//   yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

// generator function ES6

export default mySaga;
