import React from 'react'
import { Link } from 'react-router-dom'
import { TeamInfo } from '../../../data'
import {
  TeamCardContainer,
  Logo,
  RecordContainer,
} from '../styles/HomePage.styles'

const TeamCard = ({ team }) => {
  return (
    <TeamCardContainer>
      <Logo>
        {team.lten.wins >= 7 ? (
          <i className='fa-solid fa-fire fa-2x hot'></i>
        ) : team.lten.losses > 5 ? (
          <i className='fa-solid fa-cloud-snow fa-2x cold'></i>
        ) : null}

        {TeamInfo.map((val) => {
          if (val.id == team.id) {
            return <img key={val.id} src={val.logo}></img>
          } else return null
        })}
        <h3>{team.name}</h3>
        <Link to={`/${team.id}`}>Go To Team</Link>
      </Logo>
      <RecordContainer>
        <p>Last Ten</p>
        <div className='records'>
          <p> {team.lten.wins}</p>
          <p>-</p>
          <p> {team.lten.losses}</p>
          <p>-</p>
          <p> {team.lten.ot}</p>
        </div>
      </RecordContainer>
    </TeamCardContainer>
  )
}

export default TeamCard
