import model from "../model/topic1.model";

const queryResolver = {
   Allposts: async () => {
      return await model.getAllPosts();
   },

   postContent: async ({ topic, postsId }: { topic: string, postsId: string }) => {
      return await model.getPostData(topic, postsId);
   },

   tableName: async () => {
      return await model.getTableName();
   },

   getTextEditorData: async () => {
      const tableName = await model.getTableName();
      const tempPostList = await model.getTemporaryPost();
      return { tableName, tempPostList };
   },

   getTemporaryContent: async ({ uid }: { uid: string }) => {
      return await model.getTemporaryContent(uid);
   },

   getPostDataUpdate: async ({ identifier }: { identifier: string }) => {
      return await model.getPostDataForUpdate(identifier);
   },

};

export default queryResolver;