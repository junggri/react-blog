import React from "react";
import { PostItemComp } from "../../styledComponent";

const PostItem = () => {
   return (
      <PostItemComp>
         <div className="post-img">
            <img src="/images/Logo.svg" alt="" />
         </div>
         <header>
            <h1>content Name</h1>
            <h2>detail</h2>
         </header>
         <footer>
            <span>read</span>
            <span>comment</span>
         </footer>
      </PostItemComp>
   );
};
export default PostItem;

