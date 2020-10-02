import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryLP from '../Components/CountryLP';

class CountryPage extends Component {

  goBack = () => {
    this.props.history.goBack();
  }
  render() {
    return(
      <div>
        <Link onClick={this.goBack} className="back">Back</Link>
        <CountryLP id={this.props.match.params.id}/>
      </div>
    )
  }
}

export default CountryPage;
