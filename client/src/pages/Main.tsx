import React from "react";
import { HomeContainer } from "component";

interface home {
   path: string;
   url: string;
   parmars: any;
   [index: string]: any;
}

const Home = ({ match }: home) => {
   return (
      <>
         <HomeContainer match={match} />
      </>
   );
};

export default Home;
