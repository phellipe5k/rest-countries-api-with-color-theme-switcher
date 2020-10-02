import React from 'react';
import { Link } from 'react-router-dom';


class Country extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Link to={`/countries/${data.alpha3Code}`} className='country'>
       <img src={data.flag} alt={data.name} />
       <div className="info-country">
         <h2>{data.name}</h2>
         <p><strong>Population</strong>: {data.population}</p>
         <p><strong>Region:</strong> {data.region}</p>
         <p><strong>Capital:</strong> {data.capital}</p>
       </div>
      </Link>
    )
  }
}

export default Country;
