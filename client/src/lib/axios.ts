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
   getAllContents() {
      return instance({
         url: "/topic/lists",
         method: "get",
      });
   },
   saveContent(data: any) {
      return instance({
         url: "/topic/content",
         method: "post",
         data: data,
      });
   },

   getSpecificContenct(parmas: string) {},

   test() {
      return instance({
         url: "/api/test",
      });
   },
};

export default util;
