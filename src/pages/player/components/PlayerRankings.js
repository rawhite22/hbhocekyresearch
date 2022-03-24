import React from 'react'

const PlayerRankings = ({ rankings, position }) => {
  console.log(rankings)
  if (position === 'G') {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}>
        <h3>Rankings</h3>
        <p>games: {rankings.games}</p>
        <p>Goals Against: {rankings.goalsAgainst}</p>
        <p>Goals Against Avg: {rankings.goalsAgainstAverage}</p>
        <p>Wins: {rankings.wins}</p>
        <p>Losses: {rankings.losses}</p>
        <p>Saves: {rankings.saves}</p>
        <p>Save %: {rankings.savePercentage}</p>
        <p>Shots Against: {rankings.shotsAgainst}</p>
        <p>Shutouts: {rankings.shutOuts}</p>
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      }}>
      <h3>Rankings</h3>
      <p>goals: {rankings.rankGoals}</p>
      <p>Assists: {rankings.rankAssists}</p>
      <p>BlockedShots: {rankings.rankBlockedShots}</p>
      <p>ShotPct: {rankings.rankShotPct}</p>
      <p>Hits: {rankings.rankHits}</p>
      <p>PlusMinus: {rankings.rankPlusMinus}</p>
      <p>Points: {rankings.rankPoints}</p>
      <p>PowerPlayGoals: {rankings.rankPowerPlayGoals}</p>
      <p>Shots: {rankings.rankShots}</p>
      <p>PenaltyMinutes: {rankings.rankPenaltyMinutes}</p>
    </div>
  )
}

export default PlayerRankings
