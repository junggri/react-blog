const schemaType: string = `
   type Query{
      Allposts:[Allposts]
      name:String
   }
   type Allposts{
      id:Int 
      comment:Int
      uid:String
      content_name:String
      date:String
      created:String
      file:String
      detail:String
      thumbnail:String
      kindOfPosts:String
      modified:String
      topic:String
   }
   type csrf{
      csrf:String
   }
`;
export default schemaType;
