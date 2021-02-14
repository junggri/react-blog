import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Entry, Entry2, Posts, TextEditor } from "../pages";


function App() {
   return (
      <div id="App">
         <Switch>
            <Route path="/" exact component={Entry} />
            <Route path="/post" exact component={Entry} />
            <Route path="/tag" exact component={Entry2} />
            <Route path="/tag/:topic" exact component={Entry2} />
            <Route path="/about" exact component={Entry2} />
            <Route path="/topic/:topic/:postsId" exact component={Posts} />
            <Route path="/write" exact component={TextEditor} />
            <Route path="/admin/leejeongsoo" exact component={Admin} />
            <Route render={() => <h1>Not found</h1>} />
         </Switch>
      </div>
   );
}

export default App;
