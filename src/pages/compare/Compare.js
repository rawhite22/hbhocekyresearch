import React from 'react'
import { useSelector } from 'react-redux'
const Compare = () => {
  const { comparePlayers } = useSelector((state) => state)
  console.log(comparePlayers)
  if (comparePlayers.length === 0) {
    return <p>please select player to compare</p>
  }
  return (
    <div>
      {comparePlayers.map((player) => {
        return <p key={player.id}>{player.name}</p>
      })}
    </div>
  )
}

export default Compare
