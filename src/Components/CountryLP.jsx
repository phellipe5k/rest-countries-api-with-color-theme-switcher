import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryLP extends Component {
  constructor() {
    super();
    this.state = {
      country: '',
      loading: true,
      borderCountries: ''
    }
  }
  componentDidMount() {
    this.fetchApi(this.props.id);
  }
  componentDidUpdate() {
    this.fetchApi(this.props.id);
  }

  fetchApi = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
    const data = await res.json();
    this.setState(({ country: data, loading: false }))
  }

  refreshPage = () => {
    window.location.reload(false);
  }
  render() {
    const { country, loading } = this.state;
    
    if (loading) return <h1>Loading...</h1>
    return (
      <div className='country-lp'>
        <img src={country.flag}/>
        <div className='info-country-lp'>
          <h1>{country.name}</h1>
          <div className='sub-info-lp'>
            <div className='sub-sub'>
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>
            <div>
              <p><strong>Top Level Domain:</strong> {country.topLevelDomain.reduce((acc,el) => `${acc}, ${el}`)}</p>
              <p><strong>Currencies:</strong> {country.currencies[0].name}</p>
              <p><strong>Languages:</strong> {
                (country.languages.length === 1) 
                  ? `${country.languages[0].name}`
                  : country.languages.reduce((acc =  'asd', el) => `${acc.name}, ${el.name}`)  
              }</p>
            </div>
          </div>
          <h3>Border Countries: </h3>
          {
            country.borders.map(el => (
              <div className="border-countries">
                <Link to={`/countries/${el}`}>{el}</Link>
              </div>
             
            ))
          }
        </div>
      </div>
    )
  }
}
export default CountryLP;