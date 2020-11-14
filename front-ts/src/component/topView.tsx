import React from "react";
import { Link } from "react-router-dom";
import { TopView } from "../styled-comp";

interface Props {
  width: number;
}

function topView({ width }: Props) {
  console.log(2);
  return (
    <TopView width={width}>
      <Link to="/write">
        <span className="write-article-btn">새 글 쓰기</span>
      </Link>
    </TopView>
  );
}
export default React.memo(topView);
