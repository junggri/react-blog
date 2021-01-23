import React from "react";
import { Route, Switch } from "react-router-dom";
import { SSR_Entry } from "../pages";

function App() {
   return (
      <div id="App">
         <Switch>
            <Route path="/" component={SSR_Entry} />
            {/*   <Route path="/" exact component={Entry} />*/}
            {/*   <Route path="/about" exact component={Entry} />*/}
            {/*   <Route path="/topic/:topic" exact component={Entry} />*/}
            {/*   <Route path="/topic/:topic/:postsId" exact component={Posts} />*/}
            {/*   <Route path="/write" exact component={TextEditor} />*/}
            {/*   <Route path="/write/:tempId" component={TextEditor} />*/}
            {/*   <Route path="/admin/leejeongsoo" component={Admin} />*/}
            {/*   <Route render={() => <h1>Not found</h1>} />*/}
         </Switch>
      </div>
   );
}

export default App;
