import React, { MutableRefObject, useEffect, useRef } from "react";
import { MainSectionComp } from "../../styled-comp";
import { ContentSection, HomeMainSection, TopCommonSection } from "../index";
import { Route } from "react-router-dom";


const Home = ({ width, match, list, height, setHeight }: any) => {

   const navEl = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
   const params = match.params.content;

   useEffect(() => {
      setHeight(navEl.current?.offsetHeight);
   }, [navEl.current]);

   return (
      <>
         <TopCommonSection width={width} ref={navEl} />
         <MainSectionComp width={width}>
            <Route path="/" exact render={() =>
               <HomeMainSection width={width} height={height} list={list} />}
            />
            <Route path="/content/:content" render={() =>
               <ContentSection width={width} height={height} list={list} params={params} match={match} />}
            />
         </MainSectionComp>
      </>
   );
};

export default Home;