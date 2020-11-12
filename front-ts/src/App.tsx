import React from "react";
import TopView from "./component/topView";
import MainView from "./component/mainComp/ContentBox";

function App() {
  const width = window.screen.width * 0.78;
  return (
    <div id="App">
      <TopView width={width}></TopView>
      <MainView width={width}></MainView>
    </div>
  );
}
export default App;
