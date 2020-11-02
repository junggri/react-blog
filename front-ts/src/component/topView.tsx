import React from "react";
// import styled from "styled-components";
import { TopView } from "../styled";

interface Name {
  name: string;
}

const width = window.screen.width * 0.8 + "px";

function NavBar({ name }: Name) {
  return <TopView width={width}>{name}</TopView>;
}
export default NavBar;
