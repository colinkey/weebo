import React, { Component } from "react";

import logo from "../logo.svg";
import "./App.css";

import Sidebar from "./sidebar/Sidebar";
import ModuleContainer from "./ModuleContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ModuleContainer />
      </div>
    );
  }
}

export default App;
