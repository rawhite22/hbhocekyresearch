import React from 'react'
import {
  TeamSelectContainer,
  TeamContainer,
} from '../../styles/pages/TeamSelect.styles'

import { TeamInfo } from '../../data'
import { Link } from 'react-router-dom'

const TeamSelect = () => {
  return (
    <TeamSelectContainer>
      {TeamInfo.map((team) => {
        return (
          <TeamContainer key={team.id}>
            <Link to={`/${team.id}`} state={{ team: team.id }}>
              <img src={team.logo} alt='team logo' />
            </Link>
            <div className='team-name-container'>
              <h3> {team.name}</h3>
            </div>
          </TeamContainer>
        )
      })}
    </TeamSelectContainer>
  )
}

export default TeamSelect
