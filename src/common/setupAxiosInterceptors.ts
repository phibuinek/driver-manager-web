import axios from "axios";
import Cookies from "js-cookie";

function handle401Error(apiInstance: any) {
  apiInstance.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = Cookies.get("refreshToken");
          // Gọi API làm mới token
          const response = await axios.post("/auth/refresh", {
            refreshToken,
          });
          const newAccessToken = response.data.accessToken;
          Cookies.set("accessToken", newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return apiInstance(originalRequest);
        } catch (refreshError) {
          // Xử lý khi không thể làm mới token
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
}

export default handle401Error;
