import model from "../model/graphql.model";

const mutationResolver = {
   // savePost: async ({ ...input }: ITextInitialProps, req: Request) => {
   //    console.log(input);
   //    req.session.img = null;
   //    return await model.savePost(input);
   // },

   // saveTemporaryPost: async ({ ...input }: ITextInitialProps) => {
   //    return await model.saveTemporaryPost(input);
   // },

   // deleteTemporaryPostAndSavePost: async (input: ITextInitialProps) => {
   //    return await model.deleteTemporaryPostAndSavePost(input);
   // },

   // updatePost: async (input: ITextInitialProps) => {
   //    return await model.updatePost(input);
   // },

   createTopic: async (input: { topic: string }) => {
      return await model.createTopic(input);
   },

   // deleteTopic: async (input: { topic: string }) => {
   //    return await model.deleteTopic(input);
   // },

   deletePost: async (input: { topic: string, identifier: string }) => {
      return await model.deletePost({ ...input });
   },

   deleteTemporaryPost: async (input: { identifier: string }) => {
      return await model.deleteTemporaryPost(input);
   },


};
export default mutationResolver;