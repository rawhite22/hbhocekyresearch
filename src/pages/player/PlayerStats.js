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
              <p>{gm.assists}</p>
              <p>{gm.hits}</p>
              <p>{gm.blocked}</p>
              <p>{gm.plusMinus}</p>
              <p>{gm.pim}</p>
              <p>{gm.powerPlayPoints}</p>
              <p>{gm.shortHandedPoints}</p>
              <p>sht: {gm.shots}</p>
            </div>
          )
        })}
    </div>
  )
}

export default PlayerStats
