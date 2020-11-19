import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Write } from "pages";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const apiUrl = "http://localhost:4000";

axios.interceptors.request.use(
  (config: any) => {
    //인터셉터는 1.요청하기 직전, 2. 응답을 받고 then, catch로 처리 직전에 가로챌 수 있습니다.
    // Request 보내기 전에 수행됨
    // config 자체에는 request의 정보가 다 들어있음. url, headers, data 등
    // config를 반환하거나, Promise.resolve(config)으로 반환하면 되는 듯
    let token;
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    !cookies.get("token") ? (token = null) : (token = cookies.get("token"));

    if (allowedOrigins.includes(origin)) {
      config.headers = {
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  }
);

function App() {
  const [jwt, setJwt] = useState(cookies.get("token") || null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getJwt = async () => {
      const { data } = await axios.get("http://localhost:4000/api/cookie");
    };
    getJwt();
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
