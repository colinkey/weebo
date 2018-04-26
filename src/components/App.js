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
    },
    highlights: {}
  };

  toggleEnabledModule = e => {
    let module = e.target.name;
    this.setState({
      ...this.state,
      enabledModules: {
        ...this.state.enabledModules,
        [module]: !this.state.enabledModules[module]
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Sidebar enabledModules={this.state.enabledModules} />
        <ModuleContainer
          toggleEnabledModule={this.toggleEnabledModule}
          enabledModules={this.state.enabledModules}
          highlights={this.state.highlights}
        />
      </div>
    );
  }
}

export default App;
