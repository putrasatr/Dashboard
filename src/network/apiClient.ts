import axios from "axios";

export const request = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
request.interceptors.request.use(function (config: any) {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      let res = error.response;
      if (res.status === 401) {
        if (window.location.pathname !== "/") {
          window.location.href = "/";
          localStorage.clear();
        }
      }
    }
    return Promise.reject(error);
  }
);
