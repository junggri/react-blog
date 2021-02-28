const schemaType: string = `
 type Query{
      Allposts:[Allposts]
      postContent(topic:String ,postsId:String) : postContent
      tableName:[table]
      temporaryPost:[temporaryPost]
      getTextEditorData: textEditorData
      getDataFromMode(identifier:String,topic:String):dataFromMode
    }
    
    type Mutation{
      savePost(input:postData):result
      createTopic(topic:String):result
      saveTemporaryPost(input:temporaryData):result
      deleteTemporaryPostAndSavePost(input:postData):result
      updatePost(input:postData):result
      deleteTopic(topic:String):result
      deletePost(topic:String, identifier:String):result
      deleteTemporaryPost(identifier:String):result      
    }
    
    input temporaryData{
      identifier:String
      topicName:String
      content:String
      contentName:String
      detail:String
    } 
    
    input postData{
      identifier:String
      contentName:String
      content:String
      topicName:String
      kindofPosts:String
      detail:String
      thumbnail:String
    }
  
    type updateOrTempData{
      content_name:String
      detail:String
      kindofPosts:String
      topic:String
      thumbnail:String
    }
    
    type dataFromMode{
      content:String
      postdata:updateOrTempData
    }
    
    type result{
      state:Boolean
    }
    
    type postContent{
      content:String
      result:[Allposts]
    }
   
    type Allposts{
      id: Int
      comment: Int
      uid: String
      content_name: String
      date: String
      created: String
      file: String
      detail:String
      thumbnail:String
      kindofPosts: String
      modified: String
      topic: String
    }
   
    type table {
      Tables_in_contents:String
    }
   
    type temporaryPost{
      uid: String
      topic: String
      created: String
      content_name:String
      detail: String
      file: String
    }
   
    type textEditorData{
      tableName : [table]
      tempPostList:[temporaryPost]
    }
    
`;
export default schemaType;