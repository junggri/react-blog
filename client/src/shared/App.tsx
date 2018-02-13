import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Posts, SSR_Entry, TextEditor } from "../pages";


function App() {
   return (
      <div id="App">
         <Switch>
            <Route path={["/", "/post", "/tag", "/tag/:topic", "/about"]} exact={true} component={SSR_Entry} />
            <Route path="/topic/:topic/:postsId" exact={true} component={Posts} />
            <Route path="/write" exact={true} component={TextEditor} />
            <Route path="/admin/leejeongsoo" exact={true} component={Admin} />
            <Route render={() => <h1>Not found</h1>} />
         </Switch>
      </div>
   );
}

export default App;
