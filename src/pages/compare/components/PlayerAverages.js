import React from 'react'
import { Link } from 'react-router-dom'

const PlayerAverages = ({ stats, name, position }) => {
  if (position === 'Goalie') {
    return (
      <div>
        <Link to={`/`}>
          <h3>{name}</h3>
        </Link>
        <p>saves:{stats.saves}</p>
        <p>goals against:{stats.ga}</p>
        <p>sv%:{stats.svPct}</p>
        <p>shutouts:{stats.so}</p>
      </div>
    )
  }
  return (
    <div>
      <Link to={`/`}>
        <h3>{name}</h3>
      </Link>
      <p>goals: {stats.goals}</p>
      <p>assists: {stats.assists}</p>
      <p>shots: {stats.shots}</p>
      <p>blocks: {stats.blocks}</p>
      <p>hits: {stats.hits}</p>
      <p>penalty minutes: {stats.penatlyMinutes}</p>
      <p>+/-: {stats.plusMinus}</p>
      <p>powerplay points: {stats.powerPlayPoints}</p>
      <p>shorthanded points: {stats.shp}</p>
    </div>
  )
}

export default PlayerAverages
