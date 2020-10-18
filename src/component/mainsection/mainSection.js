import React from "react";

import MainSectionLeft from "./mainSection-left";
import MainSectionRight from "./mainSection-right";
import MainSectionCenter from "./mainSection-center";

class MainSection extends React.Component {
  render() {
    return (
      <section className="main-section">
        <MainSectionLeft></MainSectionLeft>
        <MainSectionCenter></MainSectionCenter>
        <MainSectionRight></MainSectionRight>
      </section>
    );
  }
}

export default MainSection;
