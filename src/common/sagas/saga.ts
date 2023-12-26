import { all, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../actions/auth";

import { watchLoginAction } from "./authSaga";

const rootSaga = function* () {
  yield all([takeLatest(LOGIN_REQUEST, watchLoginAction)]);
};
export default rootSaga;
