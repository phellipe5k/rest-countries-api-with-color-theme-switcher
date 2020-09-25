import React from 'react';

class Region extends React.Component {
  render() {
    return (
      <select name="select" defaultValue={'DEFAULT'} className="select" onChange={this.props.changeSelect}>
        <option value="all">All</option> 
        <option value="Africa">Africa</option> 
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="DEFAULT" disabled hidden>Filter by Region</option>
      </select>
     )
  }
}
export default Region;