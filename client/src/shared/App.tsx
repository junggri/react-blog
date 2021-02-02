import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Posts, SSR_Entry, TextEditor } from "../pages";
import ReactHelmet from "../useHooks/useHelmet";


function App() {
   return (
      <div id="App">
         <ReactHelmet
            title={"정그리의 블로그입니다."}
            keywords={"자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드"}
            description={"자바스크립트부터 nodejs 그리고 알고리즘과 함께 성장해나가기를 기원하는 블로그입니다. 점점 더 발전해나가는 기술들을 함께 익히고 정그리 블로그를 찾아주는 사람들에게 감사드립니다."}
         />
         <Switch>
            <Route path={["/", "/post", "/tag", "/tag/:topic"]} exact={true} component={SSR_Entry} />
            <Route path="/topic/:topic/:postsId" exact={true} component={Posts} />
            <Route path={["/write", "/write/:tempId"]} exact={true} component={TextEditor} />
            <Route path="/admin/leejeongsoo" exact={true} component={Admin} />
            <Route render={() => <h1>Not found</h1>} />
         </Switch>
      </div>
   );
}

export default App;
