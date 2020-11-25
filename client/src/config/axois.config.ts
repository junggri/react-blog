import axios from "axios";

const instance = axios.create({});

instance.interceptors.request.use(
  (config) => {
    instance.defaults.headers.common["Authorization"] = "Asd";
    instance.defaults.headers.common["Content-Type"] = "application/json";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
