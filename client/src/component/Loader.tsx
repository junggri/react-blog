import loadable, { LoadableComponent } from "@loadable/component";
import React from "react";


interface PostLoaderProps {
   slug: string;
}

const loadDetails = /* #__LOADABLE__ */ (props: PostLoaderProps) => import(`../pages/${props.slug}`);

const PostLoader: LoadableComponent<PostLoaderProps> = loadable(loadDetails, {
   fallback: <div>실패</div>,
});

export default PostLoader;