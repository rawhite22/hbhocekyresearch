import React from 'react'

const GoalieRanks = ({ ranks }) => {
  return (
    <div>
      <p>Wins: {ranks.w}</p>
      <p>Goals Against: {ranks.gaa}</p>
      <p>Save %: {ranks.svpct}</p>
      <p>Saves: {ranks.sv}</p>
      <p>Shots Against: {ranks.saavg}</p>
      <p>Shutouts: {ranks.so}</p>
    </div>
  )
}

export default GoalieRanks
