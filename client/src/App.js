import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Home from './Home';
import Connexion from './Connexion';
import Member from './Member';
import Show from './Show';
import Header from './Header';
import Serie from './Serie';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Episode from './Episode';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/connexion' component={Connexion}/>
          <Route exact path='/member' component={Member}/>
          <Route exact path='/show/:id' component={Show}/>
          <Route exact path='/serie:id' component={Serie}/>
          <Route exact path='/serie/episode:id' component={Episode}/>
      </Switch>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
