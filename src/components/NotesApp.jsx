import React from "react";
import Body from "./Body";
import Header from "./Header";
import { getInitialData } from "../utils";
import Footer from "./Footer";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      querySearch: '',
    }

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  onArchiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: true } : note) });
  }

  onActiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note) });
  }

  onSearchEventHandler({ search }) {
    this.setState(() => {
      return { querySearch: search }
    });
  }
  
  
  render() {
    return (
      <>
        <Header searchNote={this.onSearchEventHandler} />
        <Body SubmitNotes={this.onAddNoteEventHandler} notes={this.state.notes}  onDelete={this.onDeleteHandler} querySearch={this.state.querySearch} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} />
        <Footer />
      </>
    );
  }
}

export default NotesApp;
