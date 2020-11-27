import React, { useState, useRef, useEffect, useMemo } from "react";
import { HomeContentContainer, ContentContainer, TopNavBar } from "component";
import { Link } from "react-router-dom";
import { MainView, TopMainView } from "../styled-comp"; //styled-component
import util from "../lib/axios";

interface home {
  [index: string]: any;
  path: string;
  url: string;
  parmars: any;
}

const Home = ({ match }: home) => {
  let component;
  const [height, setHeight] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  let params = match.params.content;
  const width = window.screen.width * 0.78;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getContent = async () => {
      const { data } = await util.getAllContents();
      setList(data);
      setLoading(true);
    };
    getContent();
  }, []);

  useEffect(() => {
    if (ref.current !== null) setHeight(ref.current.offsetHeight);
  }, []);

  if (match.url === "/") {
    component = <HomeContentContainer width={width} height={height} list={list} loading={loading} />;
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
