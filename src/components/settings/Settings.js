import React from "react";

import CheckboxSwitch from "./CheckboxSwitch";

import "./Settings.css";

const Settings = props => (
  <div className="settings-section card module-settings">
    <h3 className="settings-header">Enabled modules</h3>
    <CheckboxSwitch
      toggleEnabledModule={props.toggleEnabledModule}
      module={props.enabledModules.timelog}
      moduleName="timelog"
    />
    <CheckboxSwitch
      toggleEnabledModule={props.toggleEnabledModule}
      module={props.enabledModules.highlights}
      moduleName="highlights"
    />
    <CheckboxSwitch
      toggleEnabledModule={props.toggleEnabledModule}
      module={props.enabledModules.buildTracker}
      moduleName="buildTracker"
    />
    <CheckboxSwitch
      toggleEnabledModule={props.toggleEnabledModule}
      module={props.enabledModules.notepad}
      moduleName="notepad"
    />
  </div>
);

export default Settings;
