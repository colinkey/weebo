import React from "react";

import "./HighlightInput.css";

const HighlightInput = props => (
  <div className="highlight">
    <button className="highlight-control-button">
      <i className="fas fa-plus" />
    </button>
    <input className="highlight-input" type="text" placeholder="Add item..." />
  </div>
);

export default HighlightInput;
