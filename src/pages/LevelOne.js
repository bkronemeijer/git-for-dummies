import React from 'react'
import LevelIndicator from '../components/LevelIndicator'

export default function LevelOne() {
  return (
    <div className="level-page">
      <div className="level-page-intro">
        <div className="level-page-header">
          <h1>Level 1</h1>
          <LevelIndicator current={1}/>
        </div>
        <p>THE CHALLENGE: you wrote some awesome code. You heard about Git being 
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
      </div>
      <div className="level-page-terminal">

      </div>
    </div>
  )
}
