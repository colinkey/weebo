import React from "react";

import "./Note.css";

const Note = props => (
  <div className={props.expanded ? "note-container card" : "note-container card collapsed"}>
    <h2 className="note-title">{props.noteTitle}</h2>
    <p className="note-body">{props.noteBody}</p>
    <div className="note-controls">
      {props.expanded ? (
        <i className="fas fa-angle-double-up" />
      ) : (
        <i className="fas fa-angle-double-down" />
      )}
      <i className="fas fa-edit" />
      <i className="fas fa-ban" />
    </div>
  </div>
);

export default Note;
