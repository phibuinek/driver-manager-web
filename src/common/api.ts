import { Config } from "@/config";
import axios from "axios";
import Cookies from "js-cookie";
import handle401Error from "./setupAxiosInterceptors";

const api = axios.create({
  baseURL: Config.baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Thêm một interceptor request để thêm token vào header
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    console.log("token: ", token);

    if (token) {
      const parsedToken = JSON.parse(token);
      console.log("parsedToken: ", parsedToken);

      config.headers["Authorization"] = `Bearer ${parsedToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Thêm  một interceptor response để refresh token khi access token hết hạn
handle401Error(api);

//login
function* login(params) {
  console.log("params: ", params);

  const response = yield api.post("auth", params);
  console.log(response);
  return response.data;
}

// get curent user
function* getCurrentUser() {
  const response = yield api.get("users/me");
  console.log(response);

  return response.data;
}

export const Api = {
  login,
  getCurrentUser,
};
