import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <input onChange={this.props.handleInput} type="text" placeholder="Search for a country..." className="search-bar" />
    )
  }
}
export default SearchBar;