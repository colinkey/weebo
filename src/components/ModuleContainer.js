import React from "react";
import { Switch, Route } from "react-router-dom";

import Welcome from "./welcome/Welcome";
import Timelog from "./timelog/Timelog";
import Highlights from "./highlights/Highlights";
import Settings from "./settings/Settings";

import "./ModuleContainer.css";

const ModuleContainer = () => (
  <div className="module-container">
    <Switch>
      <Route exact path="/home" component={Welcome} />
      <Route exact path="/timelog" component={Timelog} />
      <Route exact path="/highlights" component={Highlights} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default ModuleContainer;
