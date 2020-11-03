import React from "react";
// import styled from "styled-components";
import { TopView } from "../styled-comp";

interface Name {
  name?: string;
  children?: string;
}

const width = window.screen.width * 0.75 + "px";

function NavBar({ name }: Name) {
  return <TopView width={width}></TopView>;
}
export default NavBar;
