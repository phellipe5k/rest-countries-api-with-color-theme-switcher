import React, { Component } from 'react';
import MoonFilled from '../images/moon-fill.svg';
import MoonStroke from '../images/moon-stroke.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      src: MoonStroke,
      text: 'Light Mode',
      button: true,
    }
  }

  handleButton = () => {
    if (this.state.button) {
      this.setState((
        {
          src: MoonFilled,
          text: 'Dark Mode',
          button: false,
        }))
    } else {
      this.setState((
        {
          src: MoonStroke,
          text: 'Light Mode',
          button: true,
        }))
    }
    
  }

  render() {
    const { src, text } = this.state;
    return(
      <div className="Header">
        <h1>Where in the world?</h1>
        <button className="switch-color" onClick={() => {
          this.handleButton();
          this.props.handleChange();
        }}>
          <img src={src} alt="moon logo" />{text}
        </button>
      </div>
    )
  }
}

export default Header;
