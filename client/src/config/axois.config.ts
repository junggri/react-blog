import axios from "axios";
// import { cacheAdapterEnhancer } from "axios-extensions";


const instance = axios.create({
   baseURL: "/",
   withCredentials: true,
   // adapter: cacheAdapterEnhancer((axios.defaults as any).adapter),
});
instance.defaults.headers.common["Content-Type"] = "application/json";

instance.interceptors.request.use(
   (config) => {
      return config;
   },
   (err) => {
      return Promise.reject(err);
   },
);

export default instance;
