import React, { Component } from "react";

import "./App.css";

import Sidebar from "./sidebar/Sidebar";
import ModuleContainer from "./ModuleContainer";

const electron = window.require("electron");

class App extends Component {
  state = {
    // enabledModules: {
    //   timelog: true,
    //   highlights: true,
    //   buildTracker: true,
    //   notepad: true
    // },
    // highlights: {},
    // value: 0
    loading: true
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
      this.sendElectronMessage("update-doc", this.state)
    );
  };

  sendElectronMessage = (msg, val) => {
    electron.ipcRenderer.send(msg, val);
  };

  initalDataListener = () => {
    electron.ipcRenderer.on("send-initial-data", (event, arg) => {
      console.log(arg);
      arg.map(obj => {
        console.log(obj);
        this.setState({
          ...this.state,
          obj
        });
      });
      console.log(this.state);
    });
  };

  mainProcessListener = () => {
    electron.ipcRenderer.on("send-to-render", (event, arg) => console.log(arg));
  };

  componentDidMount() {
    this.initalDataListener();
    this.sendElectronMessage("get-initial-data");
    this.mainProcessListener();
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <p>Loading... </p>
        ) : (
          <React.Fragment>
            <Sidebar enabledModules={this.state.enabledModules} />
            <ModuleContainer
              toggleEnabledModule={this.toggleEnabledModule}
              enabledModules={this.state.enabledModules}
              highlights={this.state.highlights}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
