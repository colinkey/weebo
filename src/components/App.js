import React, { Component } from "react";

import "./App.css";

import Sidebar from "./sidebar/Sidebar";
import ModuleContainer from "./ModuleContainer";

const electron = window.require("electron");

class App extends Component {
  state = {
    loading: true
  };

  toggleEnabledModule = e => {
    let module = e.target.name;
    let newState = {
      ...this.state,
      enabledModules: {
        ...this.state.enabledModules,
        [module]: !this.state.enabledModules[module]
      }
    };
    this.setState(
      prevState => {
        return newState;
      },
      this.sendElectronMessage("update-doc", [
        { _id: this.state._id },
        {
          enabledModules: newState.enabledModules
        }
      ])
    );
  };

  sendElectronMessage = (msg, val) => {
    electron.ipcRenderer.send(msg, val);
  };

  initalDataListener = () => {
    electron.ipcRenderer.on("send-initial-data", (event, arg) => {
      this.setState({
        ...arg[0],
        loading: false
      });
    });
  };

  mainProcessListener = () => {
    electron.ipcRenderer.on("send-to-render", (event, arg) => console.log(arg));
  };

  componentDidMount() {
    console.log('require("electron-react-devtools").install()');
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
