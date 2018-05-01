import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
  faEdit,
  faSave,
  faBan
} from "@fortawesome/fontawesome-free-solid";

import "./Note.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandable: props.noteBody.length > 240,
      isEditable: false,
      expanded: false
    };
  }

  toggleEditNote = () => {
    this.setState({
      isEditable: !this.state.isEditable
    });
  };

  toggleExpandedNote = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <div
        className={this.state.expanded ? "note-container card" : "note-container card collapsed"}
      >
        {this.state.isEditable ? (
          <React.Fragment>
            <input
              type="text"
              value={this.props.noteTitle}
              onChange={this.handleTextChange}
              name="noteTitle"
            />
            <textarea
              value={this.props.noteBody}
              onChange={this.handleTextChange}
              name="noteBody"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2 className="note-title">{this.props.noteTitle}</h2>
            <p className="note-body">
              {this.props.noteBody.length > 240 && !this.state.expanded
                ? `${this.props.noteBody.substring(0, 240)}...`
                : this.props.noteBody}
            </p>
          </React.Fragment>
        )}
        <div className="note-controls">
          {this.state.isExpandable ? (
            <button onClick={this.toggleExpandedNote}>
              {this.state.expanded ? (
                <FontAwesomeIcon icon={faAngleDoubleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              )}
            </button>
          ) : null}
          <button>
            <FontAwesomeIcon
              icon={this.state.isEditable ? faSave : faEdit}
              onClick={this.toggleEditNote}
            />
          </button>
          <button>
            <FontAwesomeIcon icon={faBan} />
          </button>
        </div>
      </div>
    );
  }
}

export default Note;
