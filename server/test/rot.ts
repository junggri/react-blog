import axios from "axios";

export function ForEach(items: any, cb: any) {
   for (let i = 0; i < items.length; i++) {
      cb(items[i]);
   }
}

export function a() {
   throw new Error("error");
}

export class Users {
   static all() {
      return axios.get("/users.json").then(resp => resp.data);
   }
}
