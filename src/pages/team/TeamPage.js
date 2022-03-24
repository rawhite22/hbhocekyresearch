import React, { useState, useEffect } from 'react'
// hooks
import useTeamFetch from '../../hooks/useTeamFetch'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// components
import FilterContainer from './components/FilterContainer'
// funcs
import { filterPlayers } from '../../functions/TeamDataCompiler'
import TeamStats from './components/TeamStats'
// styles
import styled from 'styled-components'
const TeamPageContainer = styled.section`
  padding: 1rem;
`
// Component
const TeamPage = () => {
  const [filter, setFilter] = useState('All')
  const params = useParams()
  const { loading, teamInfo, roster } = useSelector((state) => state.teamStats)
  const { error } = useTeamFetch(params.teamID)

  if (loading) {
    return <p>Loading</p>
  }

  const filteredRoster = filterPlayers(roster, filter)

  return (
    <TeamPageContainer>
      <TeamStats name={teamInfo.name} stats={teamInfo.stats} />
      <FilterContainer filter={filter} setFilter={setFilter} />
      <div
        className='team_roster_container'
        style={{ display: 'flex', flexWrap: 'wrap' }}>
        {!loading &&
          filteredRoster.map((player) => {
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
