import React from 'react'

const PlayerStats = ({ stats }) => {
  return (
    <div>
      {stats.map((gm) => {
        return (
          <div key={gm.date}>
            <p>{gm.date}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerStats
