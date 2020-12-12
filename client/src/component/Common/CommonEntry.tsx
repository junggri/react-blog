import React, { MutableRefObject, useRef } from "react";
import { MainSectionComp } from "../../styled-comp";
import { ContentSection, HomeMainSection, TopCommonSection } from "../index";
import { Route } from "react-router-dom";
import usePosts from "../../useHooks/usePosts";
import useCommon from "../../useHooks/useCommon";

interface IPostsProps {
   posts: any[]
   loading: boolean
   error: Error
}

interface ICommonProps {
   width: number,
   height: number;
   token: string
   setHeight: (heigth: number) => void
   e: Error
}


function CommonEntry({ match }: any) {
   const { width, height, token, setHeight, e }: ICommonProps = useCommon();
   const { posts, loading, error }: IPostsProps = usePosts();


   const navEl = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
   const params = match.params.content;


   if (posts === null) return null;

   const getHeight = (data: any) => {
      setHeight(data.offsetHeight);
   };
   return (
      <>
         <TopCommonSection width={width} ref={navEl} onGetHeight={getHeight} />
         <MainSectionComp width={width}>
            <Route path="/" exact render={() =>
               <HomeMainSection width={width} height={height} list={posts} />}
            />
            <Route path="/content/:content" render={() =>
               <ContentSection width={width} height={height} list={posts} params={params} match={match} />}
            />
         </MainSectionComp>
      </>
   );
};

export default CommonEntry;