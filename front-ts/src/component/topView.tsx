import { get } from "https";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TopMainView } from "../styled-comp";

interface Props {
  width: number;
  ref?: any;
  getHeight: any;
}

function TopView({ width, getHeight }: Props) {
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getHeight(ref);
  }, [getHeight]);

  return (
    <TopMainView width={width} ref={ref}>
      <Link to="/write">
        <span className="write-article-btn">새 글 쓰기</span>
      </Link>
    </TopMainView>
  );
}
export default TopView;
