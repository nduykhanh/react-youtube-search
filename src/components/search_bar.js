import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
            value = {this.state.term}
            onChange={ event => this.onInputChange(event.target.value )} />
      </div>
    );
  }

  // onChange={ event => this.setState({ term: event.target.value })} />
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
