import React from "react";
import SearchNotes from "./SearchNotes";

function Header({ searchNote }) {
    return (
      <div className="note-app__header">
        <h2>stickynotes</h2>
        <SearchNotes searchNote={searchNote} />
      </div>
    );
  }
  
export default Header;    