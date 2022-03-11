import React from 'react'

const PlayerAverages = ({ stats, name }) => {
  console.log(stats)
  return (
    <div>
      <h3>{name}</h3>
      <p>g:{stats.goals}</p>
      <p>a:{stats.assists}</p>
      <p>sht:{stats.shots}</p>
      <p>blk:{stats.blocks}</p>
      <p>h:{stats.hits}</p>
      <p>pim:{stats.penatlyMinutes}</p>
      <p>+/-:{stats.plusMinus}</p>
      <p>pp:{stats.powerPlayPoints}</p>
      <p>shp:{stats.shp}</p>
    </div>
  )
}

export default PlayerAverages
