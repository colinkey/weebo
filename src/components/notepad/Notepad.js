import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

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
    <div className="new-note card">
      <button onClick={props.createNote}>
        <span className="new-note-icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        New Note
      </button>
    </div>
  </div>
);

export default Notepad;
