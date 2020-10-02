import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './Pages/Index';
import CountryPage from './Pages/CountryPage';
import './App.css';
import Header from './Components/Header';
import NotFound from './Pages/NotFound';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      classes: localStorage.theme,
      dark: true,
    }
  }
  render() {
    return (
      <div className={localStorage.getItem('theme')}>
      <Header
        handleChange={() => {
        if(this.state.dark) {
          localStorage.setItem('theme', 'dark-mode')
          this.setState(({classes: 'dark-mode', dark: false}))
        } else {
          localStorage.setItem('theme', '')
          this.setState(({classes: '', dark: true}))
        }
      }}/>
      <Switch>
        <Route path="/countries/:id" render={(props) => <CountryPage {...props} />} />
        <Route exact path="/" component={Index} />
        <Route component={NotFound} />
      </Switch>
    </div>
    )
  } 
}

export default App;
