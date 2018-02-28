import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div>
      <h1>{this.state.term}</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input 
            type="text"
            name="name"
            value={this.state.term}
            onChange={this.onInputChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    // console.log(event.target.value);
  }
  
  handleSubmit(event) {
    console.log(this.state.term);
    event.preventDefault();
  }
}

export default SearchBar;