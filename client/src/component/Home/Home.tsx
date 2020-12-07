import React, { useEffect, useRef } from "react";
import { MainView } from "../../styled-comp";
import { ContentContainer, HomeContentContainer, TopContainer } from "../index";
import { Route } from "react-router-dom";


const Home = ({ width, match, list, height, setHeight }: any) => {

   const navEl = useRef<HTMLDivElement>(null);
   const params = match.params.content;

   useEffect(() => {
      if (navEl.current !== null) {
         setHeight(navEl.current.offsetHeight);
      }
   }, [navEl.current]);

   return (
      <>
         <TopContainer width={width} ref={navEl} />
         <MainView width={width}>
            <Route path="/" exact render={() =>
               <HomeContentContainer width={width} height={height} list={list} />}
            />
            <Route path="/content/:content" render={() =>
               <ContentContainer width={width} height={height} list={list} params={params} match={match} />}
            />
         </MainView>
      </>
   );
};

export default Home;