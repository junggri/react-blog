import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main, TextEditor } from "pages";

function App() {
   return (
      <div id="App">
         <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/content/:content" exact component={Main} />
            <Route path="/content/:content/:content" component={Main} />
            <Route path="/write" component={TextEditor} />
            <Route render={() => <h1>Not found</h1>} />
         </Switch>
      </div>
   );
}

export default App;
