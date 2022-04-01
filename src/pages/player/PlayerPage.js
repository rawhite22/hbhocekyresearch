import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import usePlayerFetch from '../../hooks/usePlayerFetch'
import PlayerInfo from './components/PlayerInfo'
import PlayerLastTen from './components/PlayerLastTen'
import PlayerPerformance from './components/PlayerPerformance'
import PlayerRankings from './components/PlayerRankings'
const PlayerPage = () => {
  const params = useParams()
  console.log(params)
  const { playerInfo } = useSelector((state) => state)
  const { error } = usePlayerFetch(params)
  if (playerInfo.loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <p>{error}</p>
  }
  return (
    <div className='playerpage_container' style={{ padding: '1rem' }}>
      <PlayerInfo info={playerInfo.playerInfo.info} teamID={params.teamID} />
      <PlayerRankings
        position={playerInfo.playerInfo.info.primaryPosition.code}
        rankings={playerInfo.playerInfo.rankings}
      />
      <PlayerPerformance
        position={playerInfo.playerInfo.info.primaryPosition.code}
        lastTen={playerInfo.playerInfo.lastTen}
      />
      <PlayerLastTen
        position={playerInfo.playerInfo.info.primaryPosition.code}
        lastTen={playerInfo.playerInfo.lastTen}
      />
    </div>
  )
}

export default PlayerPage
