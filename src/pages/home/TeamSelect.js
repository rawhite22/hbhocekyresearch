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

  console.log(data)

  return (
    <TeamSelectContainer>
      <DivisionContainer>
        {data.metro.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
      <DivisionContainer>
        {data.atlantic.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
      <DivisionContainer>
        {data.central.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
      <DivisionContainer>
        {data.pacific.map((team) => (
          <TeamCard team={team} />
        ))}
      </DivisionContainer>
    </TeamSelectContainer>
  )
}

export default TeamSelect
