import React, { Component } from "react";

import logo from "../logo.svg";
import "./App.css";

import Sidebar from "./sidebar/Sidebar";
import ModuleContainer from "./ModuleContainer";

const electron = window.require("electron");

class App extends Component {
  state = {
    enabledModules: {
      timelog: true,
      highlights: true,
      buildTracker: true,
      notepad: true
    },
    highlights: {},
    value: 0
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

  sendElectronMessage = val => {
    electron.ipcRenderer.send("send-to-main", val);
  };

  getElectronMessages = () => {
    electron.ipcRenderer.on("send-to-render", (event, arg) =>
      this.setState({
        ...this.state,
        value: arg
      })
    );
  };

  componentDidMount() {
    this.getElectronMessages();
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.sendElectronMessage(this.state.value)}>Click me</button>
        <p>{this.state.value}</p>
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
