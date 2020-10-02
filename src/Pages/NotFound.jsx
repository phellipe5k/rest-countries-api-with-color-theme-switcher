import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import LottieControl from '../Components/LottieControl';
import animationNotFoundBallon from '../Components/page-error-baloon.json'
import animationNotFoundBallonW from '../Components/baloon-white.json'

class App extends React.Component {
 
  render() {
    return (
      <div>
        <Link to="/" className="back">Back to the Home Page</Link>
        <div className="error-Page">
        <h1>Page Not Found...</h1>
        { (localStorage.theme === 'dark-mode')
        ? <LottieControl animation={animationNotFoundBallon} size={'45%'} />
        : <LottieControl animation={animationNotFoundBallonW} size={'45%'} /> }
        </div>
      </div>
    )
  } 
}

export default App;
