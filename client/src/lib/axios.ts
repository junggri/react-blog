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
   getContentsName() {
      return instance({
         url: "/topic/contents/name",
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

   getPostFromParams(parmas: string) {
      return instance({
         url: `/topic/posts/${parmas}`,
         method: "get",
      });
   },

   getPostFromPostId({ topic, postsId }: { topic: string, postsId: string }) {
      return instance({
         url: `/topic/${topic}/posts/${postsId}`,
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
