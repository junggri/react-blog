import React from "react";
import TopView from "./component/topView";
import MainView from "./component/mainComp/mainView";

function App() {
  const width = window.screen.width * 0.75 + "px";
  return (
    <div>
      <TopView width={width}></TopView>
      <MainView width={width}></MainView>
    </div>
  );
}
export default App;
