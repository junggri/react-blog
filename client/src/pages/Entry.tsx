import React from "react";
import CommonEntry from "../component/Home/CommonEntry";


const Entry = ({ match }: any) => {
   return (
      <>
         <CommonEntry match={match} />
      </>
   );
};

export default Entry;
