import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => (
  <nav className="sidebar">
    <ul className="nav-list-container">
      <li className="nav-list-item">
        <NavLink to="/home" className="nav-link" activeClassName="nav-active">
          <i class="fas fa-home nav-icon" />
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/timelog"
          className="nav-link"
          activeClassName="nav-active"
        >
          <i class="fas fa-clock nav-icon" /> Timelog
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/highlights"
          className="nav-link"
          activeClassName="nav-active"
        >
          <i class="fas fa-list-alt nav-icon" /> Highlights
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          to="/settings"
          alt="Settings"
          className="nav-link"
          activeClassName="nav-active"
        >
          <i class="fas fa-wrench nav-icon" /> Settings
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
