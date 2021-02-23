// import { cacheAdapterEnhancer } from "axios-extensions";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const instance = axios.create({
   withCredentials: true,
   baseURL: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://junggri.com",
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
