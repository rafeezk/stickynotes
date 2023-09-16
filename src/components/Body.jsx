import React from "react";
import InputNotes from "./InputNotes";
import ListNotes from "./ListNotes";

function Body({ SubmitNotes, notes, querySearch, onDelete, onArchive, onActive }) {
  const activeNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));
  const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));

  return (
    <div className="note-app__body">
      <InputNotes SubmitNotes={SubmitNotes} />
      <h2>Active Notes</h2>
      <ListNotes notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Archived</h2>
      <ListNotes notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
    </div>
  );
}

export default Body;
