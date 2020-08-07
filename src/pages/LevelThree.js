import React from 'react'
import LevelIndicator from '../components/LevelIndicator'
import TerminalA from '../components/Terminal'

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
            <li>to push your commits to your branch</li>
            <li>return to the default branch</li>
            <li>pull recent changes from the remote with <span className="code">git pull</span></li>
          </ul>
        </p>
        <h3>THE ASSIGNMENT</h3>
        <p>
          <ul>
            <li>Create your own branch by running <span className="code">git checkout -b feature/more-awesomeness</span></li>
            <li>Stage and commit your local changes. We know you know how to!</li>
            <li>Push your changes to the branch you made. If you get stuck, check for a hint below.</li>
            <li>Move back to the master branch by running <span className="code">git checkout master</span></li>
            <li>Bring your local repository up to date with the remote by running <span className="code">git pull</span></li>
          </ul>
        </p>
        <details>
          <summary>Stuck? Get a hint</summary>
          <p>Hint create branch: do not forget to use the -b flag! This will create a new branch</p>
          <p>Hint add and commit: <span className='code'>git add .</span>, <span className="code">git commit -m "message here"</span></p>
          <p>Hint push changes: also specify the remote and the branchname</p>
          <p>Hint move to master: also use git checkout, but then without the b flag. Don't forget to specify the branch name you want to go to.</p>
          <p>Hint pull: use <span className="code">git pull</span></p>
        </details>
      </div>
      <div className="level-page-terminal">
        <TerminalA level={3}/>
      </div>
    </div>
  )
}
