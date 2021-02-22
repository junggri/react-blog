import React from "react";
import loadable from "@loadable/component";
import { Route, Link } from "react-router-dom";
const Test1 = loadable(/* #__LOADABLE__ */ () => import("./test1"));
const Test2 = loadable(() => import(/* webpackChunkName: "Header" */ "./test2"));
function App() {
    return (<div className="App">
      <Link to="/test1">test1</Link>
      <Link to="/test2">test2</Link>
      <Route path="/test1" exact component={Test1}/>
      <Route path="/test2" exact component={Test2}/>
    </div>);
}
export default App;
