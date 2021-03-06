import instance from "@config/axios.config";
import { ITextInitialProps } from "@modules/TextEditor/textEdit.interface";
import { ICommentDeletDataProps, ISaveCommentProps } from "@src/globalInterface";


const util = {
   getPostFromPostId(topic: string, postsId: string) {
      return instance({
         url: `/content/items/${postsId}/topics/${encodeURIComponent(topic)}`,
         method: "get",
      });
   },

   getAllPosts() {
      return instance({
         url: "/content/posts/items",
         method: "get",
      });
   },

   getDataFromMode(identifier: string, topic?: string) {
      const URL: string = topic === undefined
         ? `/content/items/${identifier}`
         : `/content/items/${identifier}/topics/${topic}`;

      return instance({
         url: URL,
         method: "get",
      });
   },


   getTopicAndTempPostsData() {
      return instance({
         url: "/content/topics/temps",
         method: "get",
      });
   },


   savePost({ data, csrf }: { data: ITextInitialProps, csrf: string }) {
      return instance({
         url: `/content/post`,
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": csrf },
      });
   },

   saveTemporaryPost(data: ITextInitialProps, csrf: string, temp_id?: string) {
      return instance({
         "url": "/content/temp",
         method: "post",
         data: { data: data, uid: temp_id },
         headers: { "X-XSRF-TOKEN": csrf },
      });
   },

   deleteTemporaryPostAndSavePost(data: ITextInitialProps, identifier: string, token: string) {
      return instance({
         url: `/content/${data.topicName}/temps/${identifier}`,
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   updatePost(data: ITextInitialProps, identifier: string, token: string) {
      return instance({
         "url": `/content/${data.topicName}/posts/${identifier}`,
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   createTopic(topic: string, token: string) {
      return instance({
         url: `/content/topics/`,
         method: "post",
         data: { topic: topic },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   deleteTopic(topic: string, token: string) {
      return instance({
         url: "/content/topics/item",
         method: "post",
         data: { topic: topic },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   deleteTemporaryPost(post_id: string, token: string) {
      return instance({
         url: `/content/temps/item`,
         method: "post",
         data: { postid: post_id },
         headers: { "X-XSRF-TOKEN": token },
      });

   },

   deletePost(topic: string, identifier: string, token: string) {
      return instance({
         url: "/content/posts/item",
         method: "post",
         data: { uid: identifier, topic: topic },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   getCSRTtoken() {
      return instance({
         url: "/api/csrf",
      });
   },

   preloadGetPost(topic: string, postsId: string) {
      return instance({
         url: `/content/preload/${encodeURIComponent(topic)}/posts/${postsId}`,
         method: "get",
      });
   },

   getGACount() {
      return instance({
         url: "/api/google/count",
         method: "get",
      });
   },

   saveThumbnail(token: string, data: any) {
      return instance({
         url: "/content/thumbnail",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   getComment(postid: string) {
      return instance({
         url: `/api/comments/comment/posts/${postid}`,
      });
   },

   saveComment(data: ISaveCommentProps, token: string) {
      return instance({
         url: "/api/comments",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   saveReply(data: any, token: string) {
      return instance({
         url: "/api/reply",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },


   deleteComment(data: ICommentDeletDataProps, token: string) {
      return instance({
         url: "/api/comments/items",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },


   // deleteComment(writer: string, pwd: string, number: string, topic: string, postId: string, deleteArr: number[], token: string) {
   //    return instance({
   //       url: "/api/comment/items",
   //       method: "post",
   //       data: { writer, pwd, number, topic, postId, deleteArr },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },
///////t사용하는 것들///////t사용하는 것들///////t사용하는 것들////


   // savePost(data: ITextInitialProps, token: string) {
   //    return instance({
   //       url: "/topic/posts",
   //       method: "post",
   //       data: data,
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

   // modifyPost(data: ITextInitialProps, uid: string, token: string) {
   //    return instance({
   //       url: "/content/modify/post",
   //       method: "post",
   //       data: { data: data, uid: uid },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

   // saveTempPost(data: ITextInitialProps, uid: string, token: string) {
   //    return instance({
   //       url: "/topic/temp",
   //       method: "post",
   //       data: { data: data, uid: uid },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

   // temporaryPost(data: ITextInitialProps, token: string, id: string) {
   //    return instance({
   //       url: "/content/temp/posts",
   //       method: "post",
   //       data: { data: data, id: id },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },
   //
   // getTempPostFromId(id: string) {
   //    return instance({
   //       url: `/content/temp/${id}`,
   //       method: "get",
   //    });
   // },
   //
   getPostFromParams(parmas: string) {
      return instance({
         url: `/content/posts/${encodeURIComponent(parmas)}`,
         method: "get",
      });
   },
   //
   // deleteTempPost(uid: string, token: string) {
   //    return instance({
   //       url: "/content/temp/items",
   //       method: "post",
   //       data: { uid: uid },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },
   //
   // makeNewTopic(topicName: string, token: string) {
   //    return instance({
   //       url: `/content/topicname/${topicName}`,
   //       method: "post",
   //       data: { newTopic: topicName },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

   adminLogin(data: any, token: string) {
      return instance({
         url: "/api/login",
         method: "post",
         data: { data },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   setJwtToken(token: string) {
      return instance({
         url: "/api/token",
         method: "post",
         headers: { "X-XSRF-TOKEN": token },
      });
   },
};

export default util;
