import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../Statics/assets/arrow.svg'

export default function LevelIndicator({current}) {
  const prev = current === 1 ? "/" : `/level-${current - 1}`
  const next = `/level-${current + 1}`


  return (
    <div className="indicator">
      <Link to={prev}><img className="previous" src={arrow} alt="<"/></Link>
      Level {current}
      {current !== 3 ?
        <Link to={next}><img src={arrow} alt=">"/></Link>
      :
      <p></p>
    }
    </div>
  )
}
