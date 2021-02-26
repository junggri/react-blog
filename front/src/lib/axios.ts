import instance from "../config/axios.config";
import { ITextInitialProps } from "../modules/TextEditor/textEdit.interface";
import { AxiosRequestConfig } from "axios";

const URL = process.env.REACT_APP_GRAPHQL_URL;

function axiosCommonObj<T>(query: T, token: T) {
   return {
      url: URL,
      method: "post",
      headers: { "X-XSRF-TOKEN": token },
      data: {
         query: query,
      },
   };
}

const util = {
   getPostFromPostId(topic: string, postsId: string, token: string) {
      const option = axiosCommonObj(`
      query {
         postContent(topic:"${encodeURIComponent(topic)}" ,postsId:"${postsId}"){
            content
            result{
               id
               comment
               uid
               content_name
               date
               created
               file
               detail
               thumbnail
               kindOfPosts
               modified
               topic
            }
         }
      }
      `, token);
      return instance(option as AxiosRequestConfig);
   },

   getAllPosts(token: string) {
      const option = axiosCommonObj(`
               query {
                    Allposts{
                       id
                       comment
                       uid
                       content_name
                       date
                       created
                       file
                       detail
                       thumbnail
                       kindOfPosts
                       modified
                       topic
                  }
               }
               `, token);
      return instance(option as AxiosRequestConfig);
   },

   getTopicAndTempPostsData(token: string) {
      const option = axiosCommonObj(`
               query {
                    getTextEditorData{
                        tableName{
                           Tables_in_contents
                        }
                        tempPostList{
                           uid
                           topic
                           content_name
                           created
                           detail
                           file
                        }
                    }
               }
               `, token);
      return instance(option as AxiosRequestConfig);
   },

   getTemporaryContent(uid: string, token: string) {
      const option = axiosCommonObj(`
         query{
            getTemporaryContent(uid:"${uid}"){
               content
            }
         }
      `, token);
      return instance(option as AxiosRequestConfig);
   },

   savePost({ data, csrf }: { data: ITextInitialProps, csrf: string }) {
      const option = axiosCommonObj(`
         mutation {
             savePost(input:{contentName:"${data.contentName}", content:"${data.content}", topicName:"${data.topicName}" ,kindofPosts:"${data.kindofPosts}",detail:"${data.detail}", thumbnail:"${data.thumbnail}"}){
                 state
             }
         }  
      `, csrf);
      return instance(option as AxiosRequestConfig);
   },

   saveTemporaryPost(data: ITextInitialProps, csrf: string) {
      const option = axiosCommonObj(`
         mutation{
            saveTemporaryPost(input:{topicName:"${data.topicName}", content:"${data.content}" ,contentName:"${data.contentName}",detail:"${data.detail}"}){
               state
            }
         }
      `, csrf);
      return instance(option as AxiosRequestConfig);
   },

   createTopic(topic: string, token: string) {
      const option = axiosCommonObj<string>(`
         mutation{
            createTopic(topic:"${topic}"){
               state
            }
         }
      `, token);
      return instance(option as AxiosRequestConfig);
   },

   deletePost(topic: string, identifier: string, token: string) {
      const option = axiosCommonObj(`
         mutation{
            deletePost(topic:"${topic}", identifier:"${identifier}"){
               state
            }
         }
      `, token);
      return instance(option as AxiosRequestConfig);
   },

   deleteTopic(topic: string, token: string) {
      const option = axiosCommonObj<string>(`
         mutation {
            deleteTopic(topic:"${topic}"){
               state
            }
         }
      `, token);
      return instance(option as AxiosRequestConfig);
   },

   deleteTemporaryPost(post_id: string, token: string) {
      const option = axiosCommonObj(`
         mutation{
            deleteTemporaryPost(identifier:"${post_id}"){
               state
            }
         }
      `, token);
      return instance(option as AxiosRequestConfig);
   },

   getCSRTtoken() {
      return instance({
         url: "/api/csrf",
      });
   },

   preloadGetAllPosts() {
      return instance({
         url: "/topic/posts/items",
         method: "get",
      });
   },

   preloadGetPost(topic: string, postsId: string) {
      return instance({
         url: `/topic/preload/${encodeURIComponent(topic)}/posts/${postsId}`,
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
         url: "/topic/thumbnail",
         method: "post",
         data: data,
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   getTopicName() {
      return instance({
         url: "/topic/contents/name",
         method: "get",
      });
   },

   // savePost(data: ITextInitialProps, token: string) {
   //    return instance({
   //       url: "/topic/posts",
   //       method: "post",
   //       data: data,
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

   modifyPost(data: ITextInitialProps, uid: string, token: string) {
      return instance({
         url: "/topic/modify/post",
         method: "post",
         data: { data: data, uid: uid },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   // saveTempPost(data: ITextInitialProps, uid: string, token: string) {
   //    return instance({
   //       url: "/topic/temp",
   //       method: "post",
   //       data: { data: data, uid: uid },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

   temporaryPost(data: ITextInitialProps, token: string, id: string) {
      return instance({
         url: "/topic/temp/posts",
         method: "post",
         data: { data: data, id: id },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   getTempPostFromId(id: string) {
      return instance({
         url: `/topic/temp/${id}`,
         method: "get",
      });
   },

   // getTempPost() {
   //    return instance({
   //       url: "/topic/temp/items",
   //       method: "get",
   //    });
   // },


   getPostFromParams(parmas: string) {
      return instance({
         url: `/topic/posts/${encodeURIComponent(parmas)}`,
         method: "get",
      });
   },


   // deleteTopic(topicName: string, token: string) {
   //    return instance({
   //       url: `/topic/:${topicName}`,
   //       method: "post",
   //       data: { topicName: topicName },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

   // deletePost(uid: string, topic: string, token: string) {
   //    return instance({
   //       url: `/topic/posts/item`,
   //       method: "post",
   //       data: { uid: uid, topic: topic },
   //       headers: { "X-XSRF-TOKEN": token },
   //    });
   // },

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

   saveComment(postname: string, content: string, grp: number, topic: string, postid: string, user: string, pwd: string, token: string) {
      return instance({
         url: "/api/comment",
         method: "post",
         data: { postname, content, grp, topic, postid, user, pwd },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   saveReply(content: string, bn: number, grp: number, sorts: number, depth: number, topic: string, postid: string, user: string, pwd: string, token: string) {
      return instance({
         url: "/api/reply",
         method: "post",
         data: { content, bn, grp, sorts, depth, topic, postid, user, pwd },
         headers: { "X-XSRF-TOKEN": token },
      });
   },

   deleteComment(writer: string, pwd: string, number: string, topic: string, postId: string, deleteArr: number[], token: string) {
      return instance({
         url: "/api/comment/items",
         method: "post",
         data: { writer, pwd, number, topic, postId, deleteArr },
         headers: { "X-XSRF-TOKEN": token },
      });
   },
};

export default util;
