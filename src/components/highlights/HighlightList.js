import React from "react";

import "./HighlightList.css";

const HighlightList = props => (
  <ul className="highlight-list">
    <li>{props.title} 1</li>
    <li>{props.title} 2</li>
    <li>{props.title} 3</li>
  </ul>
);

export default HighlightList;
