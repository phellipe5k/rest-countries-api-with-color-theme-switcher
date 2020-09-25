import React, { Component } from 'react';
import Country from './Country';
class CountryList extends Component {

  constructor() {
    super();
    this.state = {
      countries: '',
      loading: true,
    }
  }

  componentDidMount(){
    this.fetchApi()
  }

  fetchApi = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    this.setState(({countries: data, loading: false}))
  }
  
  render() {
    const { countries, loading } = this.state;
    
    if(loading) return <h1>Loading...</h1>

    return(
      <div className="countries-list">
        {
          countries.map((country,index) => <Country data={country} key={index} />)
        }
      </div>
    )
  }
}

export default CountryList;
