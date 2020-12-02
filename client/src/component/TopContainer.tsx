import React from "react";
import { TopMainView } from "../styled-comp";
import { TopNavBar } from "./index";
import { Link } from "react-router-dom";

const TopConTainer = React.forwardRef((props: any, ref: any) => {
   console.log(2);
   return (
      <TopMainView width={props.width} ref={ref}>
         <TopNavBar />
         <Link to="/write">
            <span className="write-article-btn">새 글 쓰기</span>
         </Link>
      </TopMainView>
   );
});

export default React.memo(TopConTainer);