import React from 'react'
import {
  TeamSelectContainer,
  TeamContainer,
} from '../../styles/pages/TeamSelect.styles'
import { Anchor } from '../../components/styles'
import { TeamInfo } from '../../data'

const TeamSelect = () => {
  console.log(window.innerWidth)
  return (
    <TeamSelectContainer>
      {TeamInfo.map((team) => {
        return (
          <TeamContainer key={team.id}>
            <Anchor to={`/${team.id}`} state={{ team: team.id }}>
              <img src={team.logo} alt='team logo' />
            </Anchor>
            <div className='team-name-container'>
              <p> {team.name}</p>
            </div>
          </TeamContainer>
        )
      })}
    </TeamSelectContainer>
  )
}

export default TeamSelect