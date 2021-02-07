import instance from "../config/axois.config";
import { ITextInitialProps } from "../modules/TextEditor/textEdit.interface";


const util = {
   getCSRTtoken() {
      return instance({
         url: "/api/csrf",
         method: "get",
      });
   },

   getGACount() {
      return instance({
         url: "/api/google/count",
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

   modifyPost(data: ITextInitialProps, uid: string, token: string) {
      return instance({
         url: "/topic/modify/post",
         method: "post",
         data: { data: data, uid: uid },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   saveTempPost(data: ITextInitialProps, uid: string, token: string) {
      return instance({
         url: "/topic/temp",
         method: "post",
         data: { data: data, uid: uid },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   temporaryPost(data: ITextInitialProps, token: string) {
      return instance({
         url: "/topic/temp/posts",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   getTempPostFromId(id: string) {
      return instance({
            url: `/topic/temp/${id}`,
            method: "get",
         },
      );
   },

   getTempPost() {
      return instance({
         url: "/topic/temp/items",
         method: "get",
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
         url: `/topic/posts/${encodeURIComponent(parmas)}`,
         method: "get",
      });
   },

   getPostFromPostId(topic: string, postsId: string) {
      return instance({
         url: `/topic/${encodeURIComponent(topic)}/posts/${postsId}`,
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

   deleteTempPost(uid: string, token: string) {
      return instance({
         url: "/topic/temp/items",
         method: "post",
         data: { uid: uid },
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

   setJwtToken(token: string) {
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

   getComment(postid: string) {
      return instance({
         url: `/api/item/${postid}/comment`,
      });
   },

   saveComment(content: string, grp: number, postid: string, user: string, pwd: string, token: string) {
      return instance({
         url: "/api/comment",
         method: "post",
         data: { content, grp, postid, user, pwd },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   saveReply(content: string, bn: number, grp: number, sorts: number, depth: number, postid: string, user: string, pwd: string, token: string) {
      return instance({
         url: "/api/reply",
         method: "post",
         data: { content, bn, grp, sorts, depth, postid, user, pwd },
         headers: { "X-XSRF-TOKEN": token },
      });
   },
};

export default util;