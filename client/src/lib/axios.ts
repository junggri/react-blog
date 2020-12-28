import instance from "../config/axois.config";
import { ITextInitialProps } from "../modules/TextEditor/textEdit.interface";


const util = {
   getCSRTtoken() {
      return instance({
         url: "/api/csrf",
         method: "get",
      });
   },


   getTopicName() {
      return instance({
         url: "/topic/contents/name",
         method: "get",
      });
   },

   savePost(data: ITextInitialProps, token: string) {
      return instance({
         url: "/topic/posts",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   getAllPostsItems() {
      return instance({
         url: "/topic/posts/items",
         method: "get",
      });
   },

   getPostFromParams(parmas: string) {
      return instance({
         url: `/topic/posts/${parmas}`,
         method: "get",
      });
   },

   getPostFromPostId(topic: string, postsId: string) {
      return instance({
         url: `/topic/${topic}/posts/${postsId}`,
      });
   },


   deleteTopic(topicName: string, token: string) {
      return instance({
         url: `/topic/:${topicName}`,
         method: "post",
         data: { topicName: topicName },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   deletePost(uid: string, topic: string, token: string) {
      return instance({
         url: `/topic/posts/item`,
         method: "post",
         data: { uid: uid, topic: topic },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   makeNewTopic(topicName: string, token: string) {
      return instance({
         url: `/topic/topicname/${topicName}`,
         method: "post",
         data: { newTopic: topicName },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   adminLogin(data: any, token: string) {
      return instance({
         url: "/admin/login",
         method: "post",
         data: { data },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   setToken(token: string) {
      return instance({
         url: "/admin/token",
         method: "post",
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   checkJWTToken() {
      return instance({
         url: `/admin/token/jwt`,
         method: "get",
      });
   },


};

export default util;
