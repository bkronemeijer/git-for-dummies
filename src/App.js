import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LevelOne from './pages/LevelOne';
import LevelTwo from './pages/LevelTwo';
import LevelThree from './pages/LevelThree';
import './Statics/shared.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/level-1" component={LevelOne}/>
        <Route to="/level-2" component={LevelTwo}/>
        <Route to="/level-3" component={LevelThree}/>
        <Route exact to="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
