import React from "react";

const BuildTracker = props => (
  <div className="module module-build-tracker">
    <div className="build-tracker-input-group">
      <input type="text" name="INI" placeholder="INI" />
      <input type="text" name="record" placeholder="Record Number" />
      <input type="text" name="name" placeholder="Record Name" />
      <input type="text" name="comment" placeholder="Comments" />
    </div>
  </div>
);

export default BuildTracker;
