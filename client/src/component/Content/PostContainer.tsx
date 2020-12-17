import React, { useEffect } from "react";
import usePosts from "../../useHooks/usePosts";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { PostsBoxComp } from "../../styled-comp";
import Highlight from "react-highlight.js";
import { IPostContainerProps } from "../../interface/index.interface";
import { IPostItemProps, IPostProps, IPostsModuleProps } from "../../modules/Posts/posts.interface";


const PostContainer = ({ match }: IPostContainerProps) => {
   const { getPost }: IPostsModuleProps = usePosts();
   const { post } = useSelector((state: RootState) => state.posts);
   const { data, loading, error }: IPostProps<IPostItemProps> = post;


   useEffect(() => {
      getPost(match.params.topic, match.params.postid);
   }, [match.params.topic, match.params.postid]);


   const MakeHtml = () => ({ __html: data.content });

   if (loading) return <div>...로딩중</div>;
   if (data == null) return null;

   return (
      <PostsBoxComp>
         <div className="posts-name">
            {data.result[0].content_name}
         </div>
         <Highlight language='react'>
            <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content" />
         </Highlight>
      </PostsBoxComp>
   );

};
export default PostContainer;