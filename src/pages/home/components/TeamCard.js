import React from 'react'
import { Link } from 'react-router-dom'
import { TeamInfo } from '../../../data'
import { TeamCardContainer, Logo } from '../styles/HomePage.styles'

const TeamCard = ({ team }) => {
  return (
    <TeamCardContainer>
      <Logo>
        {TeamInfo.map((val) => {
          if (val.id == team.id) {
            return <img src={val.logo}></img>
          } else return null
        })}
        <h3>{team.name}</h3>
        <Link to={`/${team.id}`}>Team Page</Link>
      </Logo>
      <div>
        <div>
          <p>W</p>
          <p>L</p>
          <p>0</p>
        </div>
        <div>
          <p>Home</p>
          <p>{team.home.wins}</p>
          <p>{team.home.losses}</p>
          <p>{team.home.ot}</p>
        </div>
        <div>
          <p>Road</p>
          <p>{team.away.wins}</p>
          <p>{team.away.losses}</p>
          <p>{team.away.ot}</p>
        </div>
        <div>
          <p>Last Ten</p>
          <p> {team.lten.wins}</p>
          <p> {team.lten.losses}</p>
          <p> {team.lten.ot}</p>
        </div>
      </div>
    </TeamCardContainer>
  )
}

export default TeamCard
