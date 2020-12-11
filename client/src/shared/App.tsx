import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Entry, TextEditor } from "pages";

function App() {
   return (
      <BrowserRouter>
         <div id="App">
            <Switch>
               <Route path="/" exact component={Entry} />
               <Route path="/content/:content" exact component={Entry} />
               <Route path="/content/:content/:content" component={Entry} />
               <Route path="/write" component={TextEditor} />
               <Route render={() => <h1>Not found</h1>} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
