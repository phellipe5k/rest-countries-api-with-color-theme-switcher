import React from 'react'
import Lottie from 'react-lottie';
 
 class LottieControl extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false, direction: 1, loop: true};
  }
 
  render() {
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: this.props.animation,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice',
        className: 'animation-wrap',
      }
    };
 
    return (
       <div className="animation">
          <Lottie
            style={{cursor: 'Pointer', maxWidth: `${this.props.size}`}}
            options={defaultOptions}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
            direction={this.state.direction}

          />
       </div>
    )
      
   
  }
}

LottieControl.defaultProps = {
  size: '70%'
}

export default LottieControl;
