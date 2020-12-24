import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Admin, Entry, Posts, TextEditor } from "pages";
import useCSRF from "../useHooks/useCSRF";

function App() {
   const csrf = useCSRF();

   // useEffect(() => {
   //    if (!csrf) {
   //
   //    }
   // }, [csrf]);


   return (
      <BrowserRouter>
         <div id="App">
            <Switch>
               <Route path="/" exact component={Entry} />
               <Route path="/topic/:topic" exact component={Entry} />
               <Route path="/topic/:topic/:postsId" exact component={Posts} />
               <Route path="/write" component={TextEditor} />
               <Route path="/admin/leejeongsoo" component={Admin} />
               <Route render={() => <h1>Not found</h1>} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
