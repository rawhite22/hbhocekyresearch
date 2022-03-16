import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import PlayerRanks from './PlayerRanks'
import GoalieRanks from './GoalieRanks'
import PlayerStats from './PlayerStats'
import GoalieStats from './GoalieStats'
import { CompareContainer } from './PlayerPage.styles'
import { playerSelect } from '../../actions/playerCompare.actions'
import { compareCompiler } from '../../functions/PlayerDataCompilers'
const PlayerPage = () => {
  const dispatch = useDispatch()
  const { comparePlayers } = useSelector((state) => state)

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
  const compareStats = compareCompiler(playerInfo, playerStatsLastTen)

  return (
    <div className='playerpage_container'>
      <CompareContainer>
        <p>{playerInfo.name}</p>
        <p>add to compare</p>
        <i
          onClick={() => dispatch(playerSelect(compareStats, comparePlayers))}
          className='fa-solid fa-ballot-check'></i>
      </CompareContainer>
      <div style={{ height: '100%' }} className='player_ranks_container'>
        {playerInfo.position !== 'Goalie' ? (
          <>
            <PlayerRanks ranks={playerRankings} />
            <PlayerStats stats={playerStatsLastTen} />
          </>
        ) : (
          <>
            <GoalieRanks ranks={playerRankings} />
            <GoalieStats stats={playerStatsLastTen} />
          </>
        )}
      </div>
      <div className='last_ten_container'></div>
    </div>
  )
}

export default PlayerPage
