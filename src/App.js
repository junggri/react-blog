import React from "react";
import NavBar from "./component/navbar";
import "./style/App.css";

class App extends React.Component {
  state = { a: 1 };

  render() {
    return (
      <div className="App">
        <NavBar web={this.state.a}></NavBar>
      </div>
    );
  }
}
export default App;
