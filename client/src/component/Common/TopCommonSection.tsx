import React, { useEffect } from "react";
import { TopCommonSectionComp } from "../../styled-comp";
import { TopNavBar } from "../index";
import { Link } from "react-router-dom";

const TopCommonSection = React.forwardRef((props: any, ref: any) => {


   useEffect(() => {
      props.onGetData(ref.current);
   }, []);

   return (
      <TopCommonSectionComp width={props.width} ref={ref}>
         <TopNavBar />
         <Link to="/write">
            <span className="write-article-btn">새 글 쓰기</span>
         </Link>
      </TopCommonSectionComp>
   );
});

export default React.memo(TopCommonSection);