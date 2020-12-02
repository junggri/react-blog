import axios from "axios";
// import { cacheAdapterEnhancer } from "axios-extensions";

const instance = axios.create({
   baseURL: "/",
   // headers: { "Authorization": "Asd" },
   // adapter: cacheAdapterEnhancer((axios.defaults as any).adapter),
});
instance.defaults.headers.common["Authorization"] = "Asd";
instance.defaults.headers.common["Content-Type"] = "application/json";
instance.interceptors.request.use(
   (config) => {
      // config.headers["asdasda"] = "Asdas";

      return config;
   },
   (err) => {
      return Promise.reject(err);
   },
);

export default instance;
