import React from "react";
import { Switch, Route } from "react-router-dom";

import Welcome from "./welcome/Welcome";
import Timelog from "./timelog/Timelog";
import Highlights from "./highlights/Highlights";
import Settings from "./settings/Settings";
import BuildTracker from "./buildTracker/BuildTracker";
import Notepad from "./notepad/Notepad";

import "./ModuleContainer.css";

const ModuleContainer = props => (
  <div className="module-container">
    <Switch>
      <Route exact path="/home" component={Welcome} />
      <Route exact path="/timelog" component={Timelog} />
      <Route exact path="/highlights" component={Highlights} />
      <Route exact path="/buildtracker" component={BuildTracker} />
      <Route exact path="/notepad" component={Notepad} />
      {/* <Route exact path="/settings" component={Settings} toggleEnabledModule={props.toggleEnabledModule} /> */}
      <Route exact path="/settings" render={() => <Settings toggleEnabledModule={props.toggleEnabledModule} />} />
    </Switch>
  </div>
);

export default ModuleContainer;
