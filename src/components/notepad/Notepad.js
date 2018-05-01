import React from "react";

import Note from "./Note";

import "./Notepad.css";

const Notepad = props => (
  <div className="module module-notepad">
    {props.notes.map((obj, index) => (
      <Note noteTitle={obj.noteTitle} noteBody={obj.noteBody} key={index} />
    ))}
    {/* <Note noteTitle={"Hello"} noteBody={"This is the note body"} />
    <Note
      noteTitle={"Hello"}
      noteBody={
        "This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body "
      }
    />
    <Note
      noteTitle={"Hello"}
      noteBody={
        "This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body This is the note body "
      }
    />
    <Note noteTitle={"Hello"} noteBody={"This is the note body"} />
    <Note noteTitle={"Hello"} noteBody={"This is the note body"} /> */}
  </div>
);

export default Notepad;
