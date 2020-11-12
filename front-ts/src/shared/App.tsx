import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Content, Write } from "pages";

// function App() {
//   return (
//     <div>
//
//       <Route path="/" exact component={Home}></Route>
//       <Switch>
//         <Route path="/about" component={About}></Route>
//         <Route path="/about/:name" component={About}></Route>
//       </Switch>
//       <Route path="/posts" component={Posts}></Route>
//     </div>
//   );
// }

function App() {
  return (
    <div id="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/content/:content" exact component={Content}></Route>
        <Route path="/write" component={Write}></Route>
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
}
export default App;
