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
        <h3>THE CHALLENGE</h3>
        <p>
          You wrote some awesome code. You heard about Git being 
          an awesome version control manager, so you want to start using git. 
          This means setting up your local git repository and saving your local
          changes on your computer. After completing this level, you will:
          <ul>
            <li>be able to initialize a git repository locally with <span className="code">git init</span></li>
            <li>be able to prepare for staging files with <span className="code">git status</span></li>
            <li>be able to stage your files to be committed with <span className="code">git add .</span></li>
            <li>be able to commit your files with <span className="code">git commit -m "commit message"</span></li>
          </ul>


        </p>
        <h3>THE ASSIGNMENT</h3>
        <p>
          <ul>
            <li>First, initialise the git repository by running <span className="code">git init</span>. This will create an empty git repository that can now be used for version management and collaboration</li>
            <li>After initialising, add all the untracked files in your directory by running <span>git add .</span>. It is important to add the dot behind the statement, as this will add all the untracked files to the staging area. Instead of a dot, it is also possible to write only the name of the file you want to add behind the command, such as <span className="code">git add myfile.js</span>. This would then only add myfile.js to the staging area</li>
            <li>After running <span className="code">git add .</span>, the files are added to the staging area, but they are not committed yet. Committing files will create a checkpoint for these files, so that you can always return to that version of your code. Running <span className="code">git commit</span> on its own is not sufficient, as git needs you to add a commit message in order to organise your version management. Therefore, add a message to your commit by running <span className="code">git commit -m "your message here"</span></li>
          </ul>
        </p>

        <details>
          <summary>Stuck? Get a hint</summary>
          <p>Hint git init: run it before anything else</p>
          <p>Hint git add .: don't forget the second argument! Either a dot or a filename</p>
          <p>Hint git commit: don't forget the commit message! Declare it by writing <span className="code">-m "your commit message"</span></p>
        </details>
      </div>
      <div className="level-page-terminal">
        <TerminalA level={1} />
      </div>
    </div>
  );
}
