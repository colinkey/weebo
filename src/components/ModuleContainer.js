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
      <Route exact path="/highlights" render={() => <Highlights highlights={props.highlights} />} />
      <Route exact path="/buildtracker" component={BuildTracker} />
      <Route
        exact
        path="/notepad"
        render={() => (
          <Notepad
            notes={props.notes}
            handleNoteTextChange={props.handleNoteTextChange}
            deleteNote={props.deleteNote}
            createNote={props.createNote}
          />
        )}
      />
      <Route
        exact
        path="/settings"
        render={() => (
          <Settings
            toggleEnabledModule={props.toggleEnabledModule}
            enabledModules={props.enabledModules}
          />
        )}
      />
    </Switch>
  </div>
);

export default ModuleContainer;
