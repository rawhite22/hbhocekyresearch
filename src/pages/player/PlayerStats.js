import React from 'react'

const PlayerStats = ({ stats }) => {
  return (
    <div>
      {stats &&
        stats.map((gm) => {
          return (
            <div key={gm.date}>
              <p>date:{gm.date}</p>
              <p>goals:{gm.goals}</p>
              <p>assists:{gm.assists}</p>
              <p>hits:{gm.hits}</p>
              <p>blocks:{gm.blocked}</p>
              <p>+/-{gm.plusMinus}</p>
              <p>penalty minutes:{gm.pim}</p>
              <p>ppp:{gm.powerPlayPoints}</p>
              <p>shp:{gm.shortHandedPoints}</p>
              <p>sht: {gm.shots}</p>
            </div>
          )
        })}
    </div>
  )
}

export default PlayerStats
