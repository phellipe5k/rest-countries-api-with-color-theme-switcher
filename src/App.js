import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './Pages/Index';
import CountryPage from './Pages/CountryPage';
import './App.css';
import Header from './Components/Header';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      classes: '',
      dark: true,
    }
  }
  render() {
    return (
      <div className={this.state.classes}>
      <Header handleChange={() => {
        if(this.state.dark) {
          this.setState(({classes: 'dark-mode', dark: false}))
        } else {
          this.setState(({classes: '', dark: true}))
        }
      }}/>
      <Switch>
        <Route path="/countries/:id" render={(props) => <CountryPage {...props} />} />
        <Route exact path="/" component={Index} />
      </Switch>
    </div>
    )
  } 
}

export default App;
