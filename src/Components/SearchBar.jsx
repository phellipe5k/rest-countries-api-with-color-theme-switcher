import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
  render() {
    return (
      <label className="search-bar-label">
        <FontAwesomeIcon icon={faSearchLocation}  className="search-icon" />
        <input onChange={this.props.handleInput} type="text" placeholder="Search for a country..." className="search-bar" />
      </label>
    )
  }
}
export default SearchBar;