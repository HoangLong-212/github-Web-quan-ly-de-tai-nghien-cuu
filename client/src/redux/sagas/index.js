import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api"

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
}


// generator function ES6

export default mySaga;
