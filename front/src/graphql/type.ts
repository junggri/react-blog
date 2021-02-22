const schemaType: string = `
   type Query{
      Allposts:[Allposts]
   }
   type Allposts{
      id:Int 
      commnet:Int
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
`;
export default schemaType;