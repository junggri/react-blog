import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Profiles from "./Profiles";
import About from "./About";
import HostotySample from "./HistorySample";
import styled from "styled-components";
import HistorySample from "./HistorySample";

// const TopView = styled.div`
//   border: 1px solid black;
//   margin: 0 auto;
//   width: ${(props) => props.width};
// `;

function App() {
  // return <TopView width="120px"></TopView>;
  return (
    <div>
      {/* <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} /> */}
    </div>
  );
}

export default App;
