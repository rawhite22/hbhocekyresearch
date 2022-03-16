import React, { useState, useEffect } from 'react'
// hooks
import { Link, useParams } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'
import FilterContainer from './components/FilterContainer'
import {
  sortByJerseyNumber,
  filterPlayers,
} from '../../functions/TeamDataCompiler'
import { TeamPageContainer } from '../../styles/pages/TeamPage.styles'
import TeamStats from './components/TeamStats'
// components

const rosterFilter = ['All', 'Forward', 'Defenseman', 'Goalie']

const TeamPage = () => {
  const [filter, setFilter] = useState('All')
  const params = useParams()
  const {
    data: teamInfo,
    isPending,
    error,
  } = useFetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${params.teamID}?expand=team.stats`,
    'team'
  )
  const {
    data: teamRoster,
    isPending: rosterPending,
    error: rosterError,
  } = useFetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${params.teamID}/roster`,
    'roster'
  )
  if (isPending || rosterPending) {
    return <p>Loading</p>
  }

  const sortJerNum = sortByJerseyNumber(teamRoster)
  const roster = filterPlayers(sortJerNum, filter)
  const { name, stats } = teamInfo

  return (
    <TeamPageContainer>
      <TeamStats name={name} stats={stats} />
      <FilterContainer filter={filter} setFilter={setFilter} />
      <div
        className='team_roster_container'
        style={{ display: 'flex', flexWrap: 'wrap' }}>
        {teamRoster &&
          roster.map((player) => {
            return (
              <div
                key={player.id}
                className='player_card_container'
                style={{ height: '200px', width: '100px' }}>
                <p>{player.name}</p>
                <p>{player.number}</p>
                <p>{player.postion.code}</p>

                <Link
                  to={`/${params.teamID}/${player.id}`}
                  state={{ teamId: params.teamID }}>
                  <i className='fa-solid fa-circle-info '></i>
                </Link>
              </div>
            )
          })}
      </div>
    </TeamPageContainer>
  )
}

export default TeamPage
