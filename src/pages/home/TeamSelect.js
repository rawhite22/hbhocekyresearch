import React from 'react'
import { Link } from 'react-router-dom'
import { TeamInfo } from '../../data'

const TeamSelect = () => {
  return (
    <div className='container'>
      {TeamInfo.map((team) => {
        const teamNameUrl = team.name.replace(/\s/g, '').toLowerCase()
        return (
          <Link key={team.id} to={`/${team.id}`}>
            {team.name}
          </Link>
        )
      })}
    </div>
  )
}

export default TeamSelect
