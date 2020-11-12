import React from "react";
import { Link } from "react-router-dom";

import { TopView } from "../styled-comp";

interface Props {
  width: number;
}
//프롭스의 인터페이스존재해야한다.

function topView({ width }: Props) {
  return (
    <TopView width={width}>
      <Link to="/write">
        <span className="write-article-btn">새 글 쓰기</span>
      </Link>
    </TopView>
  );
}
export default topView;
