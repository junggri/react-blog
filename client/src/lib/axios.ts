import instance from "../config/axois.config";

interface IContentForSave {
   contentName: string
   content: string
   topic: string
   kindOfPosts: string
   detail: string
}

interface IGetPostFromPostId {
   topic: string,
   postsId: string
}

let util = {
   getCSRTtoken() {
      return instance({
         url: "/api/csrf",
         method: "get",
      });
   },

   checkCSRFtoken(_csrfToken: string) {
      return instance({
         url: "/api/check/csrf",
         method: "post",
      });
   },

   getContents() {
      return instance({
         url: "/topic/contents/name",
         method: "get",
      });
   },

   savePost(data: IContentForSave, token: string) {
      return instance({
         url: "/topic/posts",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   getPostFromParams(parmas: string) {
      return instance({
         url: `/topic/posts/${parmas}`,
         method: "get",
      });
   },

   getPostFromPostId({ topic, postsId }: IGetPostFromPostId) {
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
