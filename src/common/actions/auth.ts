export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

//action loogin
export const actionLogin = (params) => ({
  type: LOGIN_REQUEST,
  payload: params,
});
export const loginSuccess = (response) => {
  return { type: LOGIN_SUCCESS, payload: { data: response } };
};
export const loginFailed = (err: object) => {
  return { type: LOGIN_FAILED, payload: { err } };
};
