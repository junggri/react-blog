import React from "react";
import TopView from "component/topView";
import MainView from "component/ContentComp/ContentBox";

function App() {
  const width = window.screen.width * 0.78;
  return (
    <div id="App">
      <TopView width={width}></TopView>
    </div>
  );
}
export default App;
