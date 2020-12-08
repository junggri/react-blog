import React, { useEffect, useState } from "react";
import { PostsBoxComp } from "../../styled-comp";
import util from "../../lib/axios";

interface Props {
   postsId: string
   match: any
}

const PostsBox = ({ postsId, match }: Props) => {
   const [posts, setPosts] = useState<any>();
   const [loading, setLoading] = useState(false);


   useEffect(() => {
      (async () => {
         let { data } = await util.getPostFromPostId({
            topic: match.url.split("/")[2],
            postsId: match.url.split("/")[3],
         });
         setPosts(data);
         setLoading(true);

      })();
   }, []);

   const MakeHtml = () => ({
      __html: posts.content,
   });


   if (!loading) return (<div>...로딩중</div>);
   return (
      <PostsBoxComp>
         <div className="posts-name">
            {posts.result[0].content_name}
         </div>
         <div dangerouslySetInnerHTML={MakeHtml()} className="posts-content"></div>
      </PostsBoxComp>
   );

};
export default PostsBox;