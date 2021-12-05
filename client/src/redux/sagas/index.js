import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* loginSaga(action) {
  try {
    console.log('saga',action.payload);
    const Logins = yield call(api.login, action.payload);

    console.log('[Logins]',Logins);

    yield put(actions.login.loginSuccess(Logins.data)); 
  } catch (error) {
    if(error.response.data)
    {
      console.log('error',error.response.data);
      yield put(actions.login.loginFailure(error.response.data)); 
    }
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
  console.log("mySaga")
  yield takeLatest(actions.login.loginRequest, loginSaga);
}

// generator function ES6

export default mySaga;
