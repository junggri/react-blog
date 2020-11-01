import React from "react";
import styled, { StyledFunction } from "styled-components";
interface Top {
  width: string;
}

const width = window.screen.width * 0.8 + "px";
console.log(width);
const TopView = styled.div<{ width: string }>`
  border: 1px solid black;
  margin: 0 auto;
  width: ${props};
`;

function NavBar() {
  return <TopView width="12px" />;
}
export default NavBar;
