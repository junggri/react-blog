import React from "react";

function NavBar() {
  const width = window.screen.width * 0.76 + "px";
  const style = { width: width };
  return <div className="nav-bar" style={style}></div>;
}
export default NavBar;
