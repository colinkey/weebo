import React from "react";

import HighlightGroup from "./HighlightGroup";

import "./Highlights.css";

const Highlights = () => (
  <div className="module module-highlights">
    <div className="highlight-container previous-highlights card">
      <h2 className="highlight-container-title">Last Completed Highlights</h2>
      <HighlightGroup title="Assigned Projects" current={false} />
      <HighlightGroup title="This Week's Highlights" current={false} />
      <HighlightGroup title="Next Weeks Priorities" current={false} />
      <HighlightGroup title="Upcoming Deadlines/Milestones" current={false} />
      <HighlightGroup title="Something Else" current={false} />
    </div>
    <div className="highlight-container current-highlights card">
      <h2 className="highlight-container-title">Current Highlights</h2>
      <HighlightGroup title="Assigned Projects" current={true} />
      <HighlightGroup title="This Week's Highlights" current={true} />
      <HighlightGroup title="Next Weeks Priorities" current={true} />
      <HighlightGroup title="Upcoming Deadlines/Milestones" current={true} />
      <HighlightGroup title="Something Else" current={true} />
    </div>
  </div>
);

export default Highlights;
