import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import PlayerRanks from './PlayerRanks'
import GoalieRanks from './GoalieRanks'
import PlayerStats from './PlayerStats'

const PlayerPage = () => {
  const params = useParams()
  const {
    data: playerInfo,
    isPending,
    error,
  } = useFetch(
    `https://statsapi.web.nhl.com/api/v1/people/${params.playerID}`,
    'playerInfo'
  )
  const { data: playerRankings, isPending: isPendingRanks } = useFetch(
    `https://statsapi.web.nhl.com/api/v1/people/${params.playerID}/stats?stats=regularSeasonStatRankings&season=20212022`,
    'playerRankings'
  )
  const { data: playerStatsLastTen, isPending: isPendingStats } = useFetch(
    `https://statsapi.web.nhl.com/api/v1/people/${params.playerID}/stats?stats=gameLog&season=20212022`,
    'playerStats'
  )

  if (isPending || isPendingRanks || isPendingStats) {
    return <p>Loading...</p>
  }

  return (
    <div className='playerpage_container'>
      <div className='player_info_container'>
        <p>{playerInfo.name}</p>
      </div>
      <div className='player_ranks_container'>
        {playerInfo.position !== 'Goalie' ? (
          <>
            <PlayerRanks ranks={playerRankings} />
            <PlayerStats stats={playerStatsLastTen} />
          </>
        ) : (
          <GoalieRanks ranks={playerRankings} />
        )}
      </div>
      <div className='last_ten_container'></div>
    </div>
  )
}

export default PlayerPage
