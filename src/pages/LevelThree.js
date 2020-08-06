import React from 'react'
import LevelIndicator from '../components/LevelIndicator'

export default function LevelThree() {
  return (
    <div className="level-page">
      <div className="level-page-intro">
        <div className="level-page-header">
          <h1>Level 3</h1>
          <LevelIndicator current={3}/>
        </div>
        <p>Well done!!1! Your code is now available on a remote repository and can be shared with your coworkers!
          In order to become a git pro and collaborate with your coworkers, in this level you will learn:
          <ul>
            <li>to create a branch by <span className="code">git checkout -b feature/more-awesomeness</span></li>
            <li>to stage and commit local changes</li>
            <li>to push your commits to your branch</li>
            <li>return to the default branch</li>
            <li>pull recent changes from the remote with <span className="code">git pull</span></li>
          </ul>
        </p>
        <h3>THE ASSIGNMENT</h3>
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
