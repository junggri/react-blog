import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Posts, TextEditor } from "../pages";
import Meta from "../useHooks/UseMeta";
import PostLoader from "../component/Loader";


function App() {

   const data = {
      title: "junggri blog",
      description: "자바스크립트와 웹 프로그래밍, 매일 매일 성장해 나가기를 원하는 블로입니다.",
      image: "https://www.junggri.com/images/og.jpg",
      type: "website",
   };
   return (
      <div id="App">
         <Meta data={data} />
         <Switch>
            <Route path={["/", "/post", "/tag", "/tag/:topic", "/about"]} exact
                   render={() => <PostLoader slug={"Entry"} />} />
            <Route path="/topic/:topic/:postsId" exact component={Posts} />
            <Route path="/write" exact component={TextEditor} />
            <Route path="/admin/leejeongsoo" exact component={Admin} />
            <Route render={() => <h1>Not found</h1>} />
         </Switch>
      </div>
   );
}

export default App;