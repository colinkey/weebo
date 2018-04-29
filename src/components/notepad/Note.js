import React, { Component } from "react";

import "./Note.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandable: props.noteBody.length > 240,
      expanded: false
    };
  }

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
        <h2 className="note-title">{this.props.noteTitle}</h2>
        <p className="note-body">
          {this.props.noteBody.length > 240 && !this.state.expanded
            ? `${this.props.noteBody.substring(0, 240)}...`
            : this.props.noteBody}
        </p>
        <div className="note-controls">
          {this.state.isExpandable ? (
            <button onClick={this.toggleExpandedNote}>
              <i className={`fas fa-angle-double-${this.state.expanded ? "up" : "down"}`} />
            </button>
          ) : null}
          <button>
            <i className="fas fa-edit" />
          </button>
          <button>
            <i className="fas fa-ban" />
          </button>
        </div>
      </div>
    );
  }
}
// const Note = props => (
//   <div className={props.expanded ? "note-container card" : "note-container card collapsed"}>
//     <h2 className="note-title">{props.noteTitle}</h2>
//     <p className="note-body">
//       {props.noteBody.length > 240 && !props.expanded
//         ? `${props.noteBody.substring(0, 240)}...`
//         : props.noteBody}
//     </p>
//     <div className="note-controls">
//       {props.noteBody.length > 240 ? (
//         props.expanded ? (
//           <i className="fas fa-angle-double-up" onClick={() => props.toggleExpandedNote} />
//         ) : (
//           <i className="fas fa-angle-double-down" onClick={() => props.toggleExpandedNote} />
//         )
//       ) : null}
//       <i className="fas fa-edit" />
//       <i className="fas fa-ban" />
//     </div>
//   </div>
// );

export default Note;
