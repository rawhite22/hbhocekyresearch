import React, { useEffect, useState } from 'react'
import useStandings from '../../hooks/useStandings'
// components
import TeamCard from './components/TeamCard'
// styles
import {
  DivisionContainer,
  TeamSelectContainer,
} from './styles/HomePage.styles'

const TeamSelect = () => {
  const { data, loading, error } = useStandings()

  if (loading) {
    return <p>loading</p>
  }

  return (
    <TeamSelectContainer>
      <DivisionContainer>
        <h2>Metro Standings</h2>
        {data.metro.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
      <DivisionContainer>
        <h2>Atlantic Standings</h2>
        {data.atlantic.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
      <DivisionContainer>
        <h2>Central Standings</h2>
        {data.central.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
      <DivisionContainer>
        <h2>Pacific Standings</h2>
        {data.pacific.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
    </TeamSelectContainer>
  )
}

export default TeamSelect
