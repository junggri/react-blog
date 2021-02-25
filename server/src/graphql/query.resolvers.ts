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

};

export default queryResolver;