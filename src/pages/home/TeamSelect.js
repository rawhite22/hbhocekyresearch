import React from 'react'
import styled from 'styled-components'
import { Anchor } from '../../components/styles'
import { TeamInfo } from '../../data'

const TeamSelectContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
const TeamContainer = styled.div`
  display: flex;
  img {
    height: 50px;
  }
`

const TeamSelect = () => {
  return (
    <TeamSelectContainer>
      {TeamInfo.map((team) => {
        const teamNameUrl = team.name.replace(/\s/g, '').toLowerCase()
        return (
          <TeamContainer key={team.id}>
            <Anchor to={`/${team.id}`} state={{ team: team.id }}>
              {team.name}
            </Anchor>
            <img src={team.logo} alt='team logo' />
          </TeamContainer>
        )
      })}
    </TeamSelectContainer>
  )
}

export default TeamSelect
