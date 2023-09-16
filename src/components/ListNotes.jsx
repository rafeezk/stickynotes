import React from "react";
import CardItem from "./card/CardItem";

function NotesList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length === 0) {
    return (
      <p className="notes-list__empty-message">notes not available.</p>
    );
  }

  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <CardItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
        ))
      }
    </div>
  );
}

export default NotesList;
