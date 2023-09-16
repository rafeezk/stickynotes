import React, { useState } from "react";

class InputNotes extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        title: "",
        body: "",
        char: 50
      };

      this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
      this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
      this.onSubmitChangeHandler = this.onSubmitChangeHandler.bind(this);
    }
  
    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
              title: event.target.value.slice(0, this.state.char),
            }
          });
      }

    onBodyChangeHandler(event) {
      this.setState(() => {
        return {
          body: event.target.value
        };
      });
    }
  
    onSubmitChangeHandler(event) {
      this.setState(() => {
        event.preventDefault();
        this.props.SubmitNotes(this.state);
        (this.state.title = ""), (this.state.body = "");
      });
    }

    render() {
        return (
          <div className="note-input">
            <h2>New Notes</h2>
            <form onSubmit={this.onSubmitChangeHandler}>
              <p className="note-input__title__char-limit">Characters left: {this.state.char - this.state.title.length}</p>
              <input className="note-input__title" type="text" placeholder="input title..." value={this.state.title} onChange={this.onTitleChangeHandler} required />
              <textarea className="note-input__body" type="text" placeholder="Write your notes here..." value={this.state.body} onChange={this.onBodyChangeHandler} required></textarea>
              <button type="submit">Create</button>
            </form>
          </div>
        );
      }

}

export default InputNotes;