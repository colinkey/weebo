import React from "react";

const Settings = props => (
  <div>
    <p>Enabled modules</p>
    <p>{props.test}</p>
    <input type="checkbox" id="timelog-enabled" onChange={e => props.toggleEnabledModule(e)} name="timelog" />
    <label htmlFor="timelog-enabled">Timelog</label>
    <input type="checkbox" id="highlights-enabled" onChange={e => props.toggleEnabledModule(e)} name="highlights" />
    <label htmlFor="highlights-enabled">Highlights</label>
    <input type="checkbox" id="build-tracker-enabled" onChange={e => props.toggleEnabledModule(e)} name="buildTracker" />
    <label htmlFor="build-tracker-enabled">Build Tracker</label>
    <input type="checkbox" id="notepad-enabled" onChange={e => props.toggleEnabledModule(e)} name="notepad" />
    <label htmlFor="notepad-enabled">Notepad</label>
  </div>
);

export default Settings;
