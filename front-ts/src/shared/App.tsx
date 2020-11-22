import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Write } from "pages";
import axios from "axios";

// axios.interceptors.request.use(
//   (config: any): Promise<any> => {
//     const { origin } = new URL(apiUrl + config.url);
//     const allowedOrigins = [apiUrl];
//     let token = cookies.get("token") ? cookies.get("token") : null;
//     if (allowedOrigins.includes(origin)) {
//       config.headers = {
//         Accept: "application/json",
//         authorization: `Bearer ${token}`,
//       };
//     }

//     return config;
//   },
//   (error) => {
//     // 요청 에러 직전 호출됩니다.
//     return Promise.reject(error);
//   }
// );

function App() {
  useEffect(() => {
    const CSRF = async () => {
      const { data } = await axios.get("/api/cookies");
      axios.defaults.headers.post["X-XSRF-TOKEN"] = data;
      await axios.post("/api/posts", {
        body: { asd: "asd", _csrf: data },
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": data,
        },
      });
    };
    CSRF();
  }, []);

  return (
    <div id="App">
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/content/:content" exact component={Main}></Route>
        <Route path="/write" component={Write}></Route>
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
}
export default App;
