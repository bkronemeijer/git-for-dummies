import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LevelOne from "./pages/LevelOne";
import LevelTwo from "./pages/LevelTwo";
import LevelThree from "./pages/LevelThree";
import "./Statics/shared.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/level-1" component={LevelOne} />
        <Route path="/level-2" component={LevelTwo} />
        <Route path="/level-3" component={LevelThree} />
      </Switch>
    </div>
  );
}

export default App;
