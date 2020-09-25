import React, { Component } from 'react';
import CountriesList from '../Components/CountriesList';
import Filter from '../Components/FIlter';

class Index extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    
    return(
      <>
        <Filter />
        <CountriesList />
      </>
    )
  }
}

export default Index;
