import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import Meta from "@useHooks/UseMeta";


const Entry = loadable(() => import(/* webpackChunkName: "Entry" */ "../pages/Entry"));
const Post = loadable(() => import(/* webpackChunkName: "Post" */"../pages/Post"));
const Write = loadable(() => import(/* webpackChunkName: "Write" */"../pages/Write"));
const Admin = loadable(() => import(/* webpackChunkName: "Write" */"../pages/Admin"));
const About = loadable(() => import(/* webpackChunkName: "About" */"../pages/About"));


function App() {
   const data = {
      title: "junggri blog",
      description: "자바스크립트와 웹 프로그래밍, 매일 매일 성장해 나가기를 원하는 블로그입니다.",
      image: "https://www.junggri.com/images/Logo.jpg",
      type: "website",
   };

   return (
      <div className="App">
         <Meta data={data} />
         <Switch>
            <Route path={["/", "/tag", "/tag/:topic"]} exact component={Entry} />
            <Route path="/topic/:topic/:postId" exact component={Post} />
            <Route path="/write" exact component={Write} />
            <Route path="/about" exact component={About} />
            <Route path="/admin/leejeongsoo" exact component={Admin} />
            <Route render={() => <h1>Not found</h1>} />
         </Switch>
      </div>
   );
}

export default App;
