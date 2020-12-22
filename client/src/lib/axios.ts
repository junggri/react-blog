import instance from "../config/axois.config";
import { ITextInitialProps } from "../modules/TextEditor/textEdit.interface";
import { IGetPostFromPostId } from "../interface/index.interface";


const util = {
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

   deleteTopic(topicName: string, token: string) {
      return instance({
         url: `/topic/delete/:${topicName}`,
         method: "post",
         data: { topicName: topicName },
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

};

export default util;
