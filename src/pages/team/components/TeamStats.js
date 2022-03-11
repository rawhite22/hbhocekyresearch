import React from 'react'

const TeamStats = ({ stats, name }) => {
  return (
    <div className='team_stats_container'>
      <p>{name} </p>
      <p>Goals For: {stats.gpg} per game</p>
      <p>Goals Against: {stats.gapg} per game</p>
      <p>Powerplay: {stats.ppp}%</p>
      <p>Penalty Kill: {stats.pkp}%</p>
      <p>Shots For: {stats.shpg}</p>
      <p>Shots Against: {stats.shapg}</p>
    </div>
  )
}

export default TeamStats
