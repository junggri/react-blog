import React from "react";

import MainSectionLeft from "./mainSection-left";
import MainSectionRight from "./mainSection-right";
import MainSectionCenter from "./mainSection-center";

class MainSection extends React.Component {
  render() {
    let _width = window.screen.width * 0.75 + "px";
    let navStyle = {
      width: _width,
    };
    return (
      <section className="main-section" style={navStyle}>
        <MainSectionLeft></MainSectionLeft>
        <MainSectionCenter></MainSectionCenter>
        <MainSectionRight></MainSectionRight>
      </section>
    );
  }
}

export default MainSection;
