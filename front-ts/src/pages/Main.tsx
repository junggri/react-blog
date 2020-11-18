import React, { useState, useRef, useEffect } from "react";
import { HomeContentContainer, ContentContainer } from "component";
import { Link } from "react-router-dom";
import { MainView, TopMainView } from "../styled-comp"; //styled-component

interface home {
  [index: string]: any;
  path: string;
  url: string;
  parmars: any;
}

const Home = ({ match }: home) => {
  const [height, setHeight] = useState(0);
  let params = match.params.content;
  const width = window.screen.width * 0.78;
  let component;
  let list = ["a", "b", "c", "d", "e"];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  if (match.url === "/") {
    component = <HomeContentContainer width={width} height={height} list={list} />;
  } else {
    component = <ContentContainer width={width} height={height} list={list} params={params} />;
  }

  return (
    <>
      <TopMainView width={width} ref={ref}>
        <Link to="/write">
          <span className="write-article-btn">새 글 쓰기</span>
        </Link>
      </TopMainView>
      <MainView width={width}>{component}</MainView>
    </>
  );
};

export default Home;
