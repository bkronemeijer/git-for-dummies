import React, { useState } from "react";
import LevelIndicator from "../components/LevelIndicator";
import TerminalA from "../components/Terminal";
import Phase1 from "../Statics/assets/level1/Phase1.png";
import Phase2 from "../Statics/assets/level1/Phase2.png";
import Phase3 from "../Statics/assets/level1/Phase3.png";
import Phase4 from "../Statics/assets/level1/Phase4.png";

export default function LevelOne() {
  return (
    <div className="level-page">
      <div className="level-page-intro">
        <div className="level-page-header">
          <h1>Level 1</h1>
          <LevelIndicator current={1} />
        </div>
        <p>
          THE CHALLENGE: you wrote some awesome code. You heard about Git being
          an awesome version control manager, so you want to start using git.
          This means setting up your local git repository and saving your local
          changes on your computer. After completing this level, you will:
          <ul>
            <li>be able to initialize a git repository locally</li>
            <li>be able to prepare files for changes</li>
            <li>be able to submit such changes to your state manager</li>
          </ul>
        </p>
        <p>
          <details>
            <summary>Stuck? Get a hint</summary>
            <p>Lorem ipsum blablabla playstation</p>
          </details>
        </p>
        <img alt="git" src="" />
      </div>
      <div className="level-page-terminal">
        <TerminalA level={1} />
      </div>
    </div>
  );
}
