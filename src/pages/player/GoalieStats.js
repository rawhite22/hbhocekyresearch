import React from 'react'

const GoalieStats = ({ stats }) => {
  return (
    <div>
      {stats &&
        stats.map((stat) => {
          return (
            <div key={stat.date}>
              <p>{stat.date}</p>
              <p>{stat.stats.decision}</p>
              <p>{stat.stats.saves}</p>
              <p>{stat.stats.goalAgainst}</p>
              <p>{stat.stats.savePct}</p>
              <p>{stat.stats.shutouts}</p>
            </div>
          )
        })}
    </div>
  )
}

export default GoalieStats
