import instance from "../config/axois.config";
import { ITextInitialProps } from "../modules/TextEditor/textEdit.interface";
import { IGetPostFromPostId } from "../interface/index.interface";


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

   getAllPostsItems() {
      return instance({
         url: "/topic/posts/items",
         method: "get",
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
   test() {
      return instance({
         url: "/api/test",
         method: "post",
      });
   },
};

export default util;
