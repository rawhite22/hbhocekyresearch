import React from 'react'

const PlayerInfo = ({ info }) => {
  return (
    <div>
      <p>Name: {info.fullName}</p>
      <p>Number: {info.primaryNumber}</p>
      <p>Position: {info.primaryPosition.code}</p>
      <p>Shoots: {info.shootsCatches}</p>
    </div>
  )
}

export default PlayerInfo