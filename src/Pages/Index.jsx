import React, { Component } from 'react';
import CountriesList from '../Components/CountriesList';
import Filter from '../Components/FIlter';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      loading: true,
      region: 'DEFAULT'
    }
  }

  handleInput = async ({ target }) => {
    this.setState(({ loading:true }));
    if (target.value.trim() === '') {
      if (this.state.region !== 'DEFAULT' && this.state.region !== 'all') {
        await this.fetchApi(`region/${this.state.region}`)
      } else {
         await this.fetchApi('all')
      }
    } else {
      await this.fetchApi(`name/${target.value}`)
    }
  }

  changeSelect = async ({ target }) => {
    this.setState(({ loading: true }));
    if (target.value !== 'DEFAULT' && target.value !== 'all') {
      await this.fetchApi(`region/${target.value}`)
      this.setState(({region: target.value}))
    } else {
       await this.fetchApi('all')
       this.setState(({region: 'all'}))
    }
  }

  componentDidMount(){
    this.fetchApi('all')
  }

  fetchApi = async (endpoint) => {
    
      const res = await fetch(`https://restcountries.eu/rest/v2/${endpoint}`)
      const data = await res.json()
      this.setState(({data, loading: false}))
      return data;
   
  }

  render() {
    
    return(
      <div className='cenzao'>
        <Filter handleInput={this.handleInput} changeSelect={this.changeSelect} />
        <CountriesList countries={this.state.data} loading={this.state.loading} />
      </div>
    )
  }
}

export default Index;
