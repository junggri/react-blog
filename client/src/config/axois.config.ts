import axios from "axios";
// import { cacheAdapterEnhancer } from "axios-extensions";
import * as dotenv from "dotenv";

dotenv.config();
const instance = axios.create({
   withCredentials: true,
   baseURL: "http://localhost:4000",
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
