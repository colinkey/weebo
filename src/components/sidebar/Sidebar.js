import React from "react";

import SidebarItem from "./SidebarItem";

import "./Sidebar.css";

const Sidebar = props => (
  <nav className="sidebar">
    <ul className="nav-list-container">
      <SidebarItem moduleName="Home" iconClassName="fa-home" />

      {props.enabledModules.timelog ? (
        <SidebarItem moduleName="timelog" iconClassName="fa-clock" />
      ) : null}
      {props.enabledModules.highlights ? (
        <SidebarItem moduleName="highlights" iconClassName="fa-list-alt" />
      ) : null}
      {props.enabledModules.buildTracker ? (
        <SidebarItem moduleName="buildTracker" iconClassName="fa-th-list" />
      ) : null}
      {props.enabledModules.notepad ? (
        <SidebarItem moduleName="notepad" iconClassName="fa-sticky-note" />
      ) : null}

      <SidebarItem moduleName="settings" iconClassName="fa-wrench" />
    </ul>
  </nav>
);

export default Sidebar;
