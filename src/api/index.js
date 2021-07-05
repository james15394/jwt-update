import axios from "axios";

const baseURL = "http://localhost:3000/auth";

export const axiosInstance = axios.create({
  baseURL,
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
