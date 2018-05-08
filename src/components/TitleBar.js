import React, { Component } from "react";

import "./TitleBar.css";

const remote = window.require("electron").remote;

class TitleBar extends React.Component {
  appWindow = remote.BrowserWindow.getFocusedWindow();

  closeWindow = () => {
    this.appWindow.close();
  };

  minimizeWindow = () => {
    this.appWindow.minimize();
  };

  maximizeWindow = () => {
    this.appWindow.isMaximized() ? this.appWindow.unmaximize() : this.appWindow.maximize();
  };

  render() {
    return (
      <div className="title-bar">
        <p className="title-bar-title">weebo</p>
        <div className="title-bar-button-group">
          <button className="title-bar-button" onClick={() => this.minimizeWindow()}>
            _
          </button>
          <button className="title-bar-button" onClick={() => this.maximizeWindow()}>
            +
          </button>
          <button className="title-bar-button" onClick={() => this.closeWindow()}>
            x
          </button>
        </div>
      </div>
    );
  }
}

export default TitleBar;
