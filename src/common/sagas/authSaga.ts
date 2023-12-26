import { call, put } from "redux-saga/effects";
import { Api } from "../api";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../actions/auth";

function* handleLogin(params) {
  try {
    let res = yield Api.login(params);
    if (res.statusCode != 201) {
      if (res.statusCode == 401) {
        errMesage = res.message;
      } else {
        errMesage = res.message;
      }
    } else {
      let resCurrentUser = yield Api.getCurrentUser();
      yield put({
        type: LOGIN_SUCCESS,
        payload: {
          data: resCurrentUser.data,
        },
      });
    }
  } catch (err) {
    yield put({ type: LOGIN_FAILED, err });
  }
}

export function* watchLoginAction(payload) {
  console.log(payload);
  yield call(handleLogin, payload.payload);
}
