import React from 'react'
import LevelIndicator from '../components/LevelIndicator'
import TerminalA from '../components/Terminal'

export default function LevelTwo() {
  return (
    <div className="level-page">
      <div className="level-page-intro">
        <div className="level-page-header">
          <h1>Level 2</h1>
          <LevelIndicator current={2}/>
        </div>
        <p>You are amazing! So far, you've set up your local git repository and
          staged some changes to be committed. The next step is to push these 
          changes to a remote repository, so that your progress is saved to the cloud and
          other people are able to see and work with your progress as well. In this level, 
          we will address:
          <ul>
            <li>connecting to a remote repository with <span className="code">git remode add origin git@github.com/...</span></li>
            <li>pushing to a remote repository with <span className="code">git push</span></li>
          </ul>
        </p>
        <h3>THE ASSIGNMENT</h3>
        <p>
          <ul>
            <li>Add a connection to a pre-made remote git repository by running <span className="code">git remote add origin git@github.com:awesome-developer/awesome-project.git</span>.</li>
            <li>Add and commit your changes the way your learned to.</li>
            <li>Push your changes to the local repository by typing <span className="code">git push</span></li>
          </ul>
        </p>
        <details>
          <summary>Stuck? Get a hint</summary>
          <p>Lorem ipsum blablabla playstation</p>
        </details>
      </div>
      <div className="level-page-terminal">
        <TerminalA level={2}/>
      </div>
    </div>
  )
}
