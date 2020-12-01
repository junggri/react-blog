import React, { useEffect, useRef, useState } from "react";
import { ContentContainer, HomeContentContainer, TopNavBar } from "component";
import { Link } from "react-router-dom";
import { MainView, TopMainView } from "../styled-comp"; //styled-component
import util from "../lib/axios";

interface home {
   path: string;
   url: string;
   parmars: any;
   [index: string]: any;
}

const Home = ({ match }: home) => {
   let component;
   const [height, setHeight] = useState(0);
   const [list, setList] = useState([]);

   let params = match.params.content;
   const width = window.screen.width * 0.70;

   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      (async () => {
         const { data } = await util.getContentName();
         setList(data);
         if (ref.current !== null) setHeight(ref.current.offsetHeight);
      })();
   }, []);


   if (match.url === "/") {
      component = <HomeContentContainer width={width} height={height} list={list} />;
   } else {
      component = <ContentContainer width={width} height={height} list={list} params={params} />;
   }

   return (
      <>
         <TopMainView width={width} ref={ref}>
            <TopNavBar />
            <Link to="/write">
               <span className="write-article-btn">새 글 쓰기</span>
            </Link>
         </TopMainView>
         <MainView width={width}>{component}</MainView>
      </>
   );
};

export default Home;
