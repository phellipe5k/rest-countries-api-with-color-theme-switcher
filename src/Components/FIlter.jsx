import React from 'react';
import Region from './Region';
import SearchBar from './SearchBar';
import LottieControl from './LottieControl';

class Filter extends React.Component {

  render() {
    return (
      <div className="filter-area">
        <SearchBar handleInput={this.props.handleInput} />
        <Region changeSelect={this.props.changeSelect} />
      </div>
     )
  }
}
export default Filter;