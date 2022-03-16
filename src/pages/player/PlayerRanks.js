import React from 'react'
import styled from 'styled-components'

const StyledPlayerRankings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  p {
    font-size: 1.3rem;
    padding: 5px;
  }
`
const PlayerRanks = ({ ranks }) => {
  if (ranks) {
    return (
      <StyledPlayerRankings>
        <p>Goals: {ranks.g}</p>
        <p>Assists: {ranks.a}</p>
        <p>Hits: {ranks.h}</p>
        <p>Shots: {ranks.s}</p>
        <p>Blocks: {ranks.bs}</p>
        <p>Plus/Minus: {ranks.pm}</p>
        <p>PPG: {ranks.ppg}</p>
      </StyledPlayerRankings>
    )
  }
}

export default PlayerRanks
