// import { cacheAdapterEnhancer } from "axios-extensions";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

console.log();
const instance = axios.create({
   withCredentials: true,
   baseURL: process.env.REACT_APP_BASE_URL,
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
