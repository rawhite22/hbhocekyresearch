import React from 'react'
import { useSelector } from 'react-redux'
import PlayerAverages from './components/PlayerAverages'

const Compare = () => {
  const { comparePlayers } = useSelector((state) => state)

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
            position={player.position}
          />
        )
      })}
    </div>
  )
}

export default Compare
