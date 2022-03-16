import React from 'react'
import styled from 'styled-components'

const StyledPlayerStats = styled.div`
  height: 100%;
`
const StyledStatCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #171717;
  box-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.58);
  height: 100%;
`

const PlayerStats = ({ stats }) => {
  console.log(stats)
  return (
    <StyledPlayerStats>
      {stats &&
        stats.map((gm, i) => {
          return (
            <StyledStatCard key={gm.date}>
              <p>date:{gm.date}</p>
              <p>goals:{gm.goals}</p>
              <p>assists:{gm.assists}</p>
              <p>hits:{gm.hits}</p>
              <p>blocks:{gm.blocked}</p>
              <p>+/-{gm.plusMinus}</p>
              <p>penalty minutes:{gm.pim}</p>
              <p>ppp:{gm.powerPlayPoints}</p>
              <p>shp:{gm.shortHandedPoints}</p>
              <p>sht: {gm.shots}</p>
            </StyledStatCard>
          )
        })}
    </StyledPlayerStats>
  )
}

export default PlayerStats
