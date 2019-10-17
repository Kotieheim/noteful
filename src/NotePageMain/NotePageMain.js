import React from "react";
import Note from "../Note/Note";
import "./NotePageMain.css";
import ApiContext from "../ApiContext";
import { findNote } from "../notes-helpers";
import PropTypes from "prop-types";

export default class NotePageMain extends React.Component {
  static contextType = ApiContext;
  render() {
    const { noteId } = this.props.match.params;
    const note = findNote(this.context.notes, noteId);
    return (
      <section className="NotePageMain">
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          handleDelete={this.context.handleDelete}
        />
        <div className="NotePageMain__content">
          {note.content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}

NotePageMain.defaultProps = {
  note: {
    content: ""
  }
};

NotePageMain.propTypes = {
  noteId: PropTypes.string
};
