import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PlayerInfoContainer = styled.div`
  a {
    background: dodgerblue;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
  h3 {
    margin-top: 1rem;
  }
`

const PlayerInfo = ({ info, teamID }) => {
  return (
    <PlayerInfoContainer>
      <Link to={`/${teamID}`}>Back to team</Link>
      <h3>Player Info</h3>
      <p>Name: {info.fullName}</p>
      <p>Number: {info.primaryNumber}</p>
      <p>Position: {info.primaryPosition.code}</p>
      <p>Shoots: {info.shootsCatches}</p>
    </PlayerInfoContainer>
  )
}

export default PlayerInfo
