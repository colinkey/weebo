import React from "react";

import HighlightList from "./HighlightList";

import "./HighlightGroup.css";
import HighlightInput from "./HighlightInput";

const HighlightGroup = props => (
  <div className="highglight-group">
    <h3>{props.title}</h3>
    <HighlightList title={props.title} />
    {props.current ? (
      <HighlightInput />
    ) : (
      <button>
        Copy Forward <i className="fas fa-angle-double-right" />
      </button>
    )}
  </div>
);

export default HighlightGroup;
