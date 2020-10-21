import React from "react";

class NavBar extends React.Component {
  render() {
    let _width = window.screen.width * 0.75 + "px";
    let navStyle = {
      width: _width,
    };
    return <nav className="nav-bar" style={navStyle}></nav>;
  }
}

export default NavBar;
