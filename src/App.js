import React from "react";

//components
import NavBar from "./component/navbar";
import MainSection from "./component/mainsection/mainSection";

//style
import "./style/App.css";

class App extends React.Component {
  state = { a: 1 };

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <MainSection></MainSection>
      </div>
    );
  }
}
export default App;
