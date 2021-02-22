import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";

// const Test1 = loadable(/* #__LOADABLE__ */ () => import("../test1"));
const Entry = loadable(() => import(/* webpackChunkName: "Header" */ "../pages/Entry"));

function App() {
   return (
      <div className="App">
         <Route path="/" component={Entry} />

      </div>
   );
}

export default App;
