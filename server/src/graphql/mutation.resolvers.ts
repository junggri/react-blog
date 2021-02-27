import model from "../model/topic1.model";
import { ITextInitialProps } from "../interace";

const mutationResolver = {
   savePost: async ({ ...input }: ITextInitialProps) => {
      await model.savePost(input);
   },

   saveTemporaryPost: async ({ ...input }: ITextInitialProps) => {
      return await model.saveTemporaryPost(input);
   },

   createTopic: async (input: { topic: string }) => {
      return await model.createTopic(input);
   },

   deleteTopic: async (input: { topic: string }) => {
      return await model.deleteTopic(input);
   },

   deletePost: async (input: { topic: string, identifier: string }) => {
      return await model.deletePost({ ...input });
   },

   deleteTemporaryPost: async (input: { identifier: string }) => {
      return await model.deleteTemporaryPost(input);
   },

};
export default mutationResolver;