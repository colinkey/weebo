import React, { Component } from "react";

import logo from "../logo.svg";
import "./App.css";

import Sidebar from "./sidebar/Sidebar";
import ModuleContainer from "./ModuleContainer";

class App extends Component {
  state = {
    enabledModules: {
      timelog: true,
      highlights: true,
      buildTracker: true,
      notepad: true
    }
  };

  toggleEnabledModule = e => {
    let module = e.target.name;
    this.setState(
      {
        ...this.state,
        enabledModules: {
          ...this.state.enabledModules,
          [module]: !this.state.enabledModules[module]
        }
      },
      console.log(this.state.enabledModules)
    );
  };

  render() {
    return (
      <div className="App">
        <Sidebar />
        <ModuleContainer toggleEnabledModule={this.toggleEnabledModule} test={this.testStr} />
      </div>
    );
  }
}

export default App;
