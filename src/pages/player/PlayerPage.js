import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import usePlayerFetch from '../../hooks/usePlayerFetch'
import PlayerInfo from './components/PlayerInfo'
import PlayerLastTen from './components/PlayerLastTen'
import PlayerRankings from './components/PlayerRankings'
const PlayerPage = () => {
  const params = useParams()
  const { playerInfo } = useSelector((state) => state)
  const { comparePlayers } = useSelector((state) => state)
  const { error } = usePlayerFetch(params)

  if (playerInfo.loading) {
    return <div>loading...</div>
  }

  return (
    <div className='playerpage_container' style={{ padding: '1rem' }}>
      <PlayerInfo info={playerInfo.playerInfo.info} />
      <PlayerRankings
        position={playerInfo.playerInfo.info.primaryPosition.code}
        rankings={playerInfo.playerInfo.rankings}
      />
      <PlayerLastTen
        position={playerInfo.playerInfo.info.primaryPosition.code}
        lastTen={playerInfo.playerInfo.lastTen}
      />
    </div>
  )
}

export default PlayerPage
