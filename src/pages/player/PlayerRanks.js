import React from 'react'
const PlayerRanks = ({ ranks }) => {
  return (
    <div>
      {ranks && (
        <>
          <p>Goals: {ranks.g}</p>
          <p>Assists: {ranks.a}</p>
          <p>Hits: {ranks.h}</p>
          <p>Shots: {ranks.s}</p>
          <p>Blocks: {ranks.bs}</p>
          <p>Plus/Minus: {ranks.pm}</p>
          <p>PPG: {ranks.ppg}</p>
        </>
      )}
    </div>
  )
}

export default PlayerRanks
