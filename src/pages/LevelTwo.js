import React, {useEffect, useState} from "react";
import LevelIndicator from "../components/LevelIndicator";
import TerminalA from "../components/Terminal";
import Phase1 from "../Statics/assets/level2/Phase1.png";
import Phase2 from "../Statics/assets/level2/Phase2.png";
import Phase3 from "../Statics/assets/level2/Phase3.png";
import Phase4 from "../Statics/assets/level2/Phase4.png";
import Phase5 from "../Statics/assets/level2/Phase5.png";
import { Link } from "react-router-dom";

export default function LevelTwo() {
  const [levelTwoCompleted, set_levelTwoCompleted] = useState(false);
  const [illustration, set_illustration] = useState(Phase1);
  const updateCompletedTwo = (terminalProgress) => {
    set_levelTwoCompleted(terminalProgress);
  };
  const updateIllustration = (terminalProgress) => {
    set_illustration(terminalProgress);
  };

  useEffect(() => {
    console.log(levelTwoCompleted, "is completed??")
  }, [levelTwoCompleted])

  return (
    <div className="level-page">
      <div className="level-page-intro">
        <div className="level-page-header">
          <h1>Level 2</h1>
          <LevelIndicator current={2} />
        </div>
        <p>
          You are amazing! So far, you've set up your local git repository and
          staged some changes to be committed. The next step is to push these
          changes to a remote repository, so that your progress is saved to the
          cloud and other people are able to see and work with your progress as
          well. In this level, we will address:
          <ul>
            <li>
              connecting to a remote repository with{" "}
              <span className="code">
                git remode add origin git@github.com/...
              </span>
            </li>
            <li>
              pushing to a remote repository with{" "}
              <span className="code">git push</span>
            </li>
          </ul>
        </p>
        <h3>THE ASSIGNMENT</h3>
        <p>
          <ul>
            <li>
              Add a connection to a pre-made remote git repository by running{" "}
              <span className="code">
                git remote add origin
                git@github.com:awesome-developer/awesome-project.git
              </span>
              .
            </li>
            <li>Add and commit your changes the way your learned to.</li>
            <li>
              Push your changes to the local repository by typing{" "}
              <span className="code">git push origin master</span>. Just using{" "}
              <span className="code">git push</span> would also work, but for
              this exercise we would like you to specify the remote you're
              pushing to.
            </li>
          </ul>
        </p>
        <details>
          <summary>Stuck? Get a hint</summary>
          <p>
            Hint remote add: don't forget to specify both the remote and the ssh
            url
          </p>
          <p>
            Hint add and commit: <span className="code">git add .</span>,{" "}
            <span className="code">git commit -m "message here"</span>
          </p>
          <p>
            Hint push: use <span className="code">git push origin master</span>
          </p>
        </details>
        <img
          alt="git"
          src={
            illustration === "phase1"
              ? Phase1
              : illustration === "phase2"
              ? Phase2
              : illustration === "phase3"
              ? Phase3
              : illustration === "phase4"
              ? Phase4
              : illustration === "phase5"
              ? Phase5
              : null
          }
        />
      </div>
      <div className="level-page-terminal">
        {
          levelTwoCompleted ?
            <button><Link to={'/level-3'}>Well done! Move on to level 3</Link></button>
            :
            <></>
        }
        <TerminalA level={2} updateIllustration={updateIllustration} updateCompletedTwo={updateCompletedTwo}/>
      </div>
    </div>
  );
}
