import instance from "../config/axois.config";

let util = {
   getCSRTtoken() {
      return instance({
         url: "/api/csrf",
         method: "get",
      });
   },
   checkCSRFtoken(_csrfToken: string) {
      instance.defaults.headers.post["X-XSRF-TOKEN"] = _csrfToken;
      return instance({
         url: "/api/check/csrf",
         method: "post",
      });
   },
   getContentName() {
      return instance({
         url: "/topic/content/name",
         method: "get",
      });
   },
   savePost(data: any) {
      return instance({
         url: "/topic/posts",
         method: "post",
         data: data,
      });
   },

   getSpecificPost(parmas: string) {
      return instance({
         url: `/topic/posts/${parmas}`,
         method: "get",
      });
   },

   test() {
      return instance({
         url: "/api/test",
         method: "post",
      });
   },
};

export default util;
