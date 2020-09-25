import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryLP from '../Components/CountryLP';

class CountryPage extends Component {
  render() {
    return(
      <div>
        <Link to="/" className="back">Back</Link>
        <CountryLP id={this.props.match.params.id}/>
      </div>
    )
  }
}

export default CountryPage;
