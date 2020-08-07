import React from "react";
import LevelIndicator from "../components/LevelIndicator";
import Phase1 from "../Statics/assets/level3/Phase1.png";
import Phase2 from "../Statics/assets/level3/Phase2.png";
import Phase3 from "../Statics/assets/level3/Phase3.png";
import Phase4 from "../Statics/assets/level3/Phase4.png";
import Phase5 from "../Statics/assets/level3/Phase5.png";
import Phase6 from "../Statics/assets/level3/Phase6.png";
import Phase7 from "../Statics/assets/level3/Phase7.png";
import Phase8 from "../Statics/assets/level3/Phase8.png";
import Phase9 from "../Statics/assets/level3/Phase9.png";

export default function LevelThree() {
  return (
    <div className="level-page">
      <div className="level-page-intro">
        <div className="level-page-header">
          <h1>Level 3</h1>
          <LevelIndicator current={3} />
        </div>
        <p>
          You are amazing! So far, you've set up your local git repository and
          staged some changes to be committed. The next step is to push these
          changes to a remote repository, so that your progress is saved to the
          cloud and other people are able to see and work with your progress as
          well. In this level, we will address:
          <ul>
            <li>pushing to a remote repository</li>
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
      <div className="level-page-terminal"></div>
    </div>
  );
}
