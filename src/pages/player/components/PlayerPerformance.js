import React from 'react'
// functions
import {
  draftKingsCompiler,
  dkGoalieCompiler,
} from '../../../functions/PlayerDataCompilers'

// styles
import styled from 'styled-components'

const Span = styled.span``

const PlayerPerformance = ({ lastTen, position }) => {
  if (position !== 'G') {
    const dkPTotals = draftKingsCompiler(lastTen)
    const { tenGameAvg, dkTotals } = dkPTotals

    return (
      <section>
        <h3>Performance</h3>
        <div className='draftKings'>
          <p>{dkTotals.g} goals in last five games.</p>
          <p>{dkTotals.a} assists in last five games.</p>
          <p>{dkTotals.sht} shots in last five games. </p>
          <p>
            reached the shot bonus {dkTotals.shtb} time(s) in the last five
            games.
          </p>
          <p>{dkTotals.blk} blocks in the last five games. </p>
          <p>
            reached the block bonus {dkTotals.blkb} time(s) in the last five
            games.
          </p>
          <p>reached three point bonus {dkTotals.pointB} time(s)</p>
          <p>{dkTotals.shp} shorthanded points in the last five games. </p>
          <p>
            Draftkings scoring average from last five games:{' '}
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
          <p>{dkTotals.w} wins over the last five starts.</p>
          <p>{dkTotals.sv} total saves over the last five starts.</p>
          <p>{dkTotals.ga} goals given up oveer the last five starts.</p>
          <p>{dkTotals.sho} shutous</p>
          <p>{dkTotals.otl} overtime losses </p>
          <p>35+ save bonus reached {dkTotals.svb} time(s)</p>
          <p>
            Draftkings scoring average from last five games:{' '}
            <Span score={tenGameAvg}>{tenGameAvg}</Span> points per game.
          </p>
        </div>
      </section>
    )
  }
}

export default PlayerPerformance
