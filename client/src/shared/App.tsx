import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Write } from "pages";
import util from "lib/axios";

function App() {
  useEffect(() => {
    const CSRF = async () => {
      const { data } = await util.getCSRTtoken();
      await util.testPost({ asd: "asd", _csrf: data });
    };
    CSRF();
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
