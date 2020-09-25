import React from 'react';
import Region from './Region';
import SearchBar from './SearchBar';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter-area">
        <SearchBar handleInput={() => {console.log('changing')}} />
        <Region changeSelect={() => {console.log('mudou')}} />
      </div>
     )
  }
}
export default Filter;