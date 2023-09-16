import React from "react";

class SearchNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            search: '' 
        };

        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        this.setState({ search: event.target.value }, () => {
            return this.props.searchNote(this.state);
          });
      };

    render(){
        return(
        <header>
            <div className="search-note">
                    <input
                    value={this.state.search} 
                    onChange={this.onSearchChangeHandler} 
                    type="text" 
                    id="search"  
                    placeholder='find note...'/>
            </div>
        </header>
        )
    }
}

export default SearchNotes;