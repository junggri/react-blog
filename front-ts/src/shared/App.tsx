import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Write } from "pages";
import axios from "axios";

function App() {
  useEffect(() => {
    let result = async () => {
      let res = await axios.get("http://localhost:4000");
      console.log(res);
    };
    result();
  }, []);
  return (
    <div id="App">
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/content/:content" exact component={Main}></Route>
        <Route path="/write" component={Write}></Route>
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
}
export default App;
