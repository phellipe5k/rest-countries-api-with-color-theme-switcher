import React, { Component } from 'react';
import Country from './Country';
import LottieControl from './LottieControl';
import animationData from './890-loading-animation.json';
import animationNotFoundG from './4339-not-found.json';
import animationNotFoundW from './lf30_editor_wybh3p6e.json';


class CountryList extends Component {
  render() {
    const { countries, loading } = this.props;
    
    if(loading) return (
      <LottieControl animation={animationData}/>
    )

    return(
      <div className="countries-list">
        {(countries.status === 404)
        ? (localStorage.theme === 'dark-mode') ? <LottieControl animation={animationNotFoundW} /> : <LottieControl animation={animationNotFoundG} />
        : countries.map((country,index) => <Country data={country} key={index} />)
        }
      </div>
    )
  }
}

export default CountryList;
