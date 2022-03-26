import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Section = styled.section`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
`
const Article = styled(motion.article)`
  background: #272727;
  border-radius: 5px;
  padding: 0.5rem;
`
const Card = styled(motion.div)`
  background: #272727;
  border-radius: 5px;
  padding: 0.5rem;
`

const PlayerLastTen = ({ lastTen, position }) => {
  if (position === 'G') {
    return (
      <Section>
        {lastTen.map((gameInfo) => (
          <Card key={gameInfo.date}>
            <motion.h3>Date:{gameInfo.date}</motion.h3>(
            <motion.div>
              <p>Win:{gameInfo.isWin ? 1 : 0}</p>
              <p>Loss:{gameInfo.isWin ? 0 : 1}</p>
              <p>OT:{gameInfo.isOT ? ' yes' : ' no'}</p>
              <p>Saves:{gameInfo.stat.saves}</p>
              <p>Goals Against:{gameInfo.stat.goalsAgainst}</p>
              <p>Save %:{gameInfo.stat.savePercentage}</p>
            </motion.div>
            )
          </Card>
        ))}
      </Section>
    )
  }
  return (
    <Section>
      {lastTen.map((game) => (
        <Card key={game.date}>
          <motion.h3>Date: {game.date}</motion.h3>
          <motion.div>
            <p>goals:{game.stat.goals}</p>
            <p>assists:{game.stat.assists}</p>
            <p>shots:{game.stat.shots}</p>
            <p>hits:{game.stat.hits}</p>
            <p>blocked:{game.stat.blocked}</p>
            <p>plusMinus:{game.stat.plusMinus}</p>
            <p>powerPlayPoints:{game.stat.powerPlayPoints}</p>
            <p>shortHandedPoints:{game.stat.shortHandedPoints}</p>
            <p>pim:{game.stat.pim}</p>
          </motion.div>
        </Card>
      ))}
    </Section>
  )
}

export default PlayerLastTen
