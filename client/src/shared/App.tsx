import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Write } from "pages";

function App() {
   return (
      <div id="App">
         <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/content/:content" exact component={Main} />
            <Route path="/write" component={Write} />
            <Route render={() => <h1>Not found</h1>} />
         </Switch>
      </div>
   );
}

export default App;
