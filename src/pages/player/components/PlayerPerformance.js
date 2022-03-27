import React from 'react'
// functions
import {
  draftKingsCompiler,
  dkGoalieCompiler,
} from '../../../functions/PlayerDataCompilers'

// styles
import styled from 'styled-components'

const Span = styled.span`
  color: ${(props) =>
    props.score > 15 ? 'green' : props.score < 7 ? 'red' : '#c8d7e6'};
`

const PlayerPerformance = ({ lastTen, position }) => {
  if (position !== 'G') {
    const dkPTotals = draftKingsCompiler(lastTen)
    const { tenGameAvg, dkTotals } = dkPTotals

    return (
      <section>
        <h3>Performance</h3>
        <div className='draftKings'>
          <h4>Draft Kings</h4>
          <p>goals: {dkTotals.g}</p>
          <p>assists: {dkTotals.a}</p>
          <p>shots: {dkTotals.sht}</p>
          <p>shot bonus: {dkTotals.shtb}</p>
          <p>blocks: {dkTotals.blk}</p>
          <p>block bonus: {dkTotals.blkb}</p>
          <p>3 point bonus: {dkTotals.pointB}</p>
          <p>shp: {dkTotals.shp}</p>
          <p>
            Scoring average from last ten games:{' '}
            <Span score={tenGameAvg}>{tenGameAvg}</Span> points per game.
          </p>
        </div>
      </section>
    )
  } else {
    const dkGTotals = dkGoalieCompiler(lastTen)
    const { tenGameAvg, dkTotals } = dkGTotals
    return (
      <section>
        <h3>Performance</h3>
        <div className='draftKings'>
          <p>Wins: {dkTotals.w}</p>
          <p>Saves: {dkTotals.sv}</p>
          <p>GoalsAgainst: {dkTotals.ga}</p>
          <p>Shutout: {dkTotals.sho}</p>
          <p>Overtime Loss: {dkTotals.otl}</p>
          <p>35+ Save Bonus: {dkTotals.svb}</p>
          <p>
            Scoring average from last ten games:{' '}
            <Span score={tenGameAvg}>{tenGameAvg}</Span> points per game.
          </p>
        </div>
      </section>
    )
  }
}

export default PlayerPerformance
