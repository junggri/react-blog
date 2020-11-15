import React from "react";
import { Link } from "react-router-dom";
import { TopMainView } from "../styled-comp";

interface Props {
  width: number;
}

function topView({ width }: Props) {
  return (
    <TopMainView width={width}>
      <Link to="/write">
        <span className="write-article-btn">새 글 쓰기</span>
      </Link>
    </TopMainView>
  );
}
export default React.memo(topView);
