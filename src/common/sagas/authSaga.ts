import { call, put } from "redux-saga/effects";
import { Api } from "../api";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../actions/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { log } from "console";


function* handleLogin(params) {
  const route = params.router
   console.log('route', route);
  try {
    let res = yield Api.login(params.values);
    if (res.statusCode != 201) {
      if (res.statusCode == 401) {
        errMesage = res.message;
      } else {
        errMesage = res.message;
      }
    } else {
      Cookies.set("accessToken", JSON.stringify(res.data.accessToken));
      Cookies.set("refreshToken", JSON.stringify(res.data.refresherToken));
      //const accessToken = JSON.parse(Cookies.get("accessToken") as string);
      //const refreshToken = JSON.parse(Cookies.get("refreshToken") as string);
      // console.log("accessToken: ", accessToken);
      // console.log("refreshToken: ", refreshToken);
      let resCurrentUser = yield Api.getCurrentUser();
      route.push('/dashboard');
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
