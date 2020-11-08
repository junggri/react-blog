import React, { useEffect } from "react";
import axios from "axios";
import { MainView } from "../../styled-comp";
import LeftView from "./leftView";
import CenterView from "./centerView";
import RightView from "./rightView";
import styled from "styled-components";

interface Props {
  width: number;
  children?: string;
}

function Main({ width }: Props) {
  // useEffect(() => {
  //   const fetch = async () => {
  //     let result = await axios.get("http://localhost:4000/user");
  //   };
  //   fetch();
  // }, []);

  let a = ["a", "b", "c", "d", "e"];

  return (
    <MainView width={width}>
      <LeftView list={a}></LeftView>
      <CenterView width={width}></CenterView>
      <RightView></RightView>
    </MainView>
  );
}

export default Main;
