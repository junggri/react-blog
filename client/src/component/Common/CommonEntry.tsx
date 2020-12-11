import React, { MutableRefObject, useRef } from "react";
import { MainSectionComp } from "../../styled-comp";
import { ContentSection, HomeMainSection, TopCommonSection } from "../index";
import { Route } from "react-router-dom";
import usePosts from "../../useHooks/useData";


interface HomeProps {
   width: number
   posts: any[]
   height: number
   loading: boolean
   error: Error
   setHeight: (data: number) => void
}

function CommonEntry({ match }: any) {
   const { width, posts, height, loading, error, setHeight }: HomeProps = usePosts();
   const navEl = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
   const params = match.params.content;


   if (posts === null) return null;

   const getHeight = (data: any) => {
      setHeight(data.offsetHeight);
   };
   return (
      <>
         <TopCommonSection width={width} ref={navEl} onGetData={getHeight} />
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