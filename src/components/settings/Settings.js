import React from "react";

const Settings = props => (
  <div>
    <p>Enabled modules</p>
    <p>{props.test}</p>
    <input
      type="checkbox"
      id="timelog-enabled"
      onChange={e => props.toggleEnabledModule(e)}
      name="timelog"
      checked={props.enabledModules.timelog ? true : false}
    />
    <label htmlFor="timelog-enabled">Timelog</label>
    <input
      type="checkbox"
      id="highlights-enabled"
      onChange={e => props.toggleEnabledModule(e)}
      name="highlights"
      checked={props.enabledModules.highlights ? true : false}
    />
    <label htmlFor="highlights-enabled">Highlights</label>
    <input
      type="checkbox"
      id="build-tracker-enabled"
      onChange={e => props.toggleEnabledModule(e)}
      name="buildTracker"
      checked={props.enabledModules.buildTracker ? true : false}
    />
    <label htmlFor="build-tracker-enabled">Build Tracker</label>
    <input
      type="checkbox"
      id="notepad-enabled"
      onChange={e => props.toggleEnabledModule(e)}
      name="notepad"
      checked={props.enabledModules.notepad ? true : false}
    />
    <label htmlFor="notepad-enabled">Notepad</label>
  </div>
);

export default Settings;
