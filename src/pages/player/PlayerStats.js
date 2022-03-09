import React from 'react'

const PlayerStats = ({ stats }) => {
  return (
    <div>
      {stats &&
        stats.map((gm) => {
          return (
            <div key={gm.date}>
              <p>{gm.date}</p>
              <p>{gm.goals}</p>
            </div>
          )
        })}
    </div>
  )
}

export default PlayerStats
