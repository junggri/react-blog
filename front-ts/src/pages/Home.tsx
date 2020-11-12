import React from "react";
import TopView from "component/topView";
import HomeView from "component/HomeView";

const Home = () => {
  const width = window.screen.width * 0.78;

  return (
    <>
      <TopView width={width} />
      <HomeView width={width} />
    </>
  );
};

export default Home;
