import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Posts, SSR_Entry, TextEditor } from "../pages";


function App() {
   return (
      <div id="App">
         <Switch>
            <Route path={["/", "/post", "/tag", "/tag/:topic"]} exact component={SSR_Entry} />
            <Route path="/topic/:topic/:postsId" exact component={Posts} />
            <Route path={["/write", "/write/:tempId"]} exact component={TextEditor} />
            <Route path="/admin/leejeongsoo" exact component={Admin} />
            <Route render={() => <h1>Not found</h1>} />
            {/*   <Route path="/about" exact component={Entry} />*/}
            {/*   <Route path="/topic/:topic" exact component={Entry} />*/}
         </Switch>
      </div>
   );
}

export default App;
