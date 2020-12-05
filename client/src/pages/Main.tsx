import React, { useEffect, useRef, useState } from "react";
import { ContentContainer, HomeContentContainer, TopContainer } from "component";
import { MainView } from "../styled-comp"; //styled-component
import util from "../lib/axios";
import { Route } from "react-router-dom";

interface home {
   path: string;
   url: string;
   parmars: any;
   [index: string]: any;
}

const Home = ({ match }: home) => {
   const [height, setHeight] = useState(0);
   const [list, setList] = useState([]);
   const ref = useRef<HTMLDivElement>(null);

   let params = match.params.content;
   const width = window.screen.width * 0.70;

   useEffect(() => {
      (async () => {
         const { data } = await util.getContentsName();
         setList(data);
         if (ref.current !== null) setHeight(ref.current.offsetHeight);
      })();
   }, []);


   return (
      <>
         <TopContainer width={width} ref={ref} />
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
