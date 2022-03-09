import React from 'react'
// hooks
import { Link, useParams } from 'react-router-dom'
import { Anchor } from '../../components/styles'
import { useFetch } from '../../hooks/useFetch'
// components

const TeamPage = () => {
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

  const { name, stats } = teamInfo
  const { gpg, gapg, ppp, pkp, shpg, shapg } = stats
  return (
    <div className='team_page_container'>
      <div className='team_stats_container'>
        <p>{name} </p>
        <p>Goals For: {gpg} per game</p>
        <p>Goals Against: {gapg} per game</p>
        <p>Powerplay: {ppp}%</p>
        <p>Penalty Kill: {pkp}%</p>
        <p>Shots For: {shpg}</p>
        <p>Shots Against: {shapg}</p>
      </div>
      <div className='team_roster_container'>
        {teamRoster &&
          teamRoster.map((player) => {
            return (
              <div key={player.id} className='player_card_container'>
                <p>{player.name}</p>
                <Anchor
                  to={`/${params.teamID}/${player.id}`}
                  state={{ teamId: params.teamID }}>
                  <i className='fa-solid fa-circle-info '></i>
                </Anchor>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default TeamPage
