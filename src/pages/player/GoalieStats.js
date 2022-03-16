import React from 'react'
import styled from 'styled-components'

const StyledGoalieStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`
const StyledStatCard = styled.div`
  display: flex;
  flex-direction: column;
`

const GoalieStats = ({ stats }) => {
  return (
    <StyledGoalieStats>
      {stats &&
        stats.map((stat) => {
          return (
            <StyledStatCard key={stat.date}>
              <p>date: {stat.date}</p>
              <p>w/l: {stat.stats.decision}</p>
              <p>saves: {stat.stats.saves}</p>
              <p>gaa: {stat.stats.goalsAgainst}</p>
              <p>sv%: {stat.stats.savePct}</p>
              <p>shutout: {stat.stats.shutouts}</p>
            </StyledStatCard>
          )
        })}
    </StyledGoalieStats>
  )
}

export default GoalieStats
