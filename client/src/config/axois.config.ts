import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const instance = axios.create({
  baseURL: "/",
  adapter: cacheAdapterEnhancer((axios.defaults as any).adapter),
});

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
