import React from "react";

import HighlightEntry from "./HighlightEntry";

import "./Highlights.css";

const Highlights = () => (
  <div className="module module-highlights">
    <div className="highlight-container previous-highlights">
      <p>placeholder.</p>
    </div>
    <div className="highlight-container previous-highlights">
      <HighlightEntry title="Assigned Projects" />
      <HighlightEntry title="This Week's Highlights" />
      <HighlightEntry title="Next Weeks Priorities" />
      <HighlightEntry title="Upcoming Deadlines/Milestones" />
      <HighlightEntry title="Something Else" />
    </div>
  </div>
);

export default Highlights;
