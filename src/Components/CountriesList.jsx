import React, { Component } from 'react';
import Country from './Country';
class CountryList extends Component {
  
  render() {
    const { countries, loading } = this.props;
    
    if(loading) return <h1>Loading...</h1>

    return(
      <div className="countries-list">
        {(countries.status === 404)
        ? <h1>Nada Encontrado...</h1>
        : countries.map((country,index) => <Country data={country} key={index} />)
        }
      </div>
    )
  }
}

export default CountryList;
