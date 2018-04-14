import React from "react";

import HighlightList from "./HighlightList";

import "./HighlightGroup.css";

const HighlightGroup = props => (
  <div className="highglight-group">
    <h3>{props.title}</h3>
    <HighlightList title={props.title} />
    {props.current ? (
      <input type="text" placeholder="Add item..." />
    ) : (
      <button>Copy Forward</button>
    )}
  </div>
);

export default HighlightGroup;
