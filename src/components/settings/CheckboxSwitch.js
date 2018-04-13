import React from "react";

import "./CheckboxSwitch.css";

const CheckboxSwitch = props => (
  <div className="checkbox-switch">
    <p className="checkbox-switch-label">{`${props.moduleName[0].toUpperCase() +
      props.moduleName.substring(1)}`}</p>
    <label htmlFor={`${props.moduleName}-enabled`} className="switch">
      <input
        type="checkbox"
        id={`${props.moduleName}-enabled`}
        name={`${props.moduleName}`}
        onChange={e => props.toggleEnabledModule(e)}
        checked={props.module ? true : false}
      />
      <span className="slider" />
    </label>
  </div>
);

export default CheckboxSwitch;
