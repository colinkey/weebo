import React from "react";

import Note from "./Note";

import "./Notepad.css";

const Notepad = props => (
  <div className="module module-notepad">
    {props.notes.map((obj, index) => (
      <Note
        noteTitle={obj.noteTitle}
        noteBody={obj.noteBody}
        handleNoteTextChange={props.handleNoteTextChange}
        deleteNote={props.deleteNote}
        id={index}
        key={index}
      />
    ))}
  </div>
);

export default Notepad;
