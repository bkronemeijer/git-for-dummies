import React from 'react'
import LevelIndicator from '../components/LevelIndicator'

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
      </div>
      <div className="level-page-terminal">

      </div>
    </div>
  )
}
