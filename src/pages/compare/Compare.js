import React from 'react'
import { useSelector } from 'react-redux'
import PlayerAverages from './PlayerAverages'

const Compare = () => {
  const { comparePlayers } = useSelector((state) => state)
  console.log(comparePlayers)
  if (comparePlayers.length === 0) {
    return <p>please select player to compare</p>
  }
  return (
    <div>
      {comparePlayers.map((player) => {
        return (
          <PlayerAverages
            key={player.id}
            stats={player.stats}
            name={player.name}
          />
        )
      })}
    </div>
  )
}

export default Compare
