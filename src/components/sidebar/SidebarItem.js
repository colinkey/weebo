import React from "react";
import { NavLink } from "react-router-dom";

import "./SidebarItem.css";

const SidebarItem = props => (
  <li className="nav-list-item">
    <NavLink to={`/${props.moduleName}`} className="nav-link" activeClassName="nav-active">
      <i className={`fas ${props.iconClassName} nav-icon`} />{" "}
      {`${props.moduleName[0].toUpperCase() + props.moduleName.substring(1)}`}
    </NavLink>
  </li>
);

export default SidebarItem;
