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

const GoalieRanks = ({ ranks }) => {
  if (ranks) {
    return (
      <StyledPlayerRankings>
        <p>Wins: {ranks.w}</p>
        <p>Goals Against: {ranks.gaa}</p>
        <p>Save %: {ranks.svpct}</p>
        <p>Saves: {ranks.sv}</p>
        <p>Shots Against: {ranks.saavg}</p>
        <p>Shutouts: {ranks.so}</p>
      </StyledPlayerRankings>
    )
  }
}

export default GoalieRanks
