import React, { useEffect, useState } from 'react'
import { TeamInfo } from '../../data'
import { Link } from 'react-router-dom'
import styles from './styles/TeamSelect.module.css'

const TeamSelect = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(
      'https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record'
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        const standings = {
          metro: [],
          atlantic: [],
          central: [],
          pacific: [],
        }
        data.records.forEach((division) => {
          switch (division.division.nameShort) {
            case 'Metro':
              division.teamRecords.forEach((team) => {
                standings.metro.push({
                  id: team.team.id,
                  name: team.team.name,
                  home: team.records.overallRecords[0],
                  away: team.records.overallRecords[1],
                  lten: team.records.overallRecords[3],
                })
              })
              break
            case 'ATL':
              division.teamRecords.forEach((team) => {
                standings.atlantic.push({
                  id: team.team.id,
                  name: team.team.name,
                  home: team.records.overallRecords[0],
                  away: team.records.overallRecords[1],
                  lten: team.records.overallRecords[3],
                })
              })
              break
            case 'CEN':
              division.teamRecords.forEach((team) => {
                standings.central.push({
                  id: team.team.id,
                  name: team.team.name,
                  home: team.records.overallRecords[0],
                  away: team.records.overallRecords[1],
                  lten: team.records.overallRecords[3],
                })
              })
              break
            case 'PAC':
              division.teamRecords.forEach((team) => {
                standings.pacific.push({
                  id: team.team.id,
                  name: team.team.name,
                  home: team.records.overallRecords[0],
                  away: team.records.overallRecords[1],
                  lten: team.records.overallRecords[3],
                })
              })
              break

            default:
              break
          }
        })
        setData(standings)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p>loading</p>
  }

  console.log(data)

  return (
    <div className={styles.teamSelectContainer}>
      <div>
        {data.metro.map((team) => (
          <>
            <Link to={`/${team.id}`}>{team.name}</Link>
            {TeamInfo.map((val) => {
              if (val.id == team.id) {
                return <img src={val.logo}></img>
              } else return null
            })}
            <div style={{ display: 'flex' }}>
              <p>W: {team.home.wins}</p>
              <p>L: {team.home.losses}</p>
              <p>O: {team.home.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.away.wins}</p>
              <p>L: {team.away.losses}</p>
              <p>O: {team.away.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.lten.wins}</p>
              <p>L: {team.lten.losses}</p>
              <p>O: {team.lten.ot}</p>
            </div>
          </>
        ))}
      </div>
      <div>
        {data.atlantic.map((team) => (
          <>
            <Link to={`/${team.id}`}>{team.name}</Link>
            {TeamInfo.map((val) => {
              if (val.id == team.id) {
                return <img src={val.logo}></img>
              } else return null
            })}
            <div style={{ display: 'flex' }}>
              <p>W: {team.home.wins}</p>
              <p>L: {team.home.losses}</p>
              <p>O: {team.home.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.away.wins}</p>
              <p>L: {team.away.losses}</p>
              <p>O: {team.away.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.lten.wins}</p>
              <p>L: {team.lten.losses}</p>
              <p>O: {team.lten.ot}</p>
            </div>
          </>
        ))}
      </div>
      <div>
        {data.central.map((team) => (
          <>
            <Link to={`/${team.id}`}>{team.name}</Link>
            {TeamInfo.map((val) => {
              if (val.id == team.id) {
                return <img src={val.logo}></img>
              } else return null
            })}
            <div style={{ display: 'flex' }}>
              <p>W: {team.home.wins}</p>
              <p>L: {team.home.losses}</p>
              <p>O: {team.home.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.away.wins}</p>
              <p>L: {team.away.losses}</p>
              <p>O: {team.away.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.lten.wins}</p>
              <p>L: {team.lten.losses}</p>
              <p>O: {team.lten.ot}</p>
            </div>
          </>
        ))}
      </div>
      <div>
        {data.pacific.map((team) => (
          <>
            <Link to={`/${team.id}`}>{team.name}</Link>
            {TeamInfo.map((val) => {
              if (val.id == team.id) {
                return <img src={val.logo}></img>
              } else return null
            })}
            <div style={{ display: 'flex' }}>
              <p>W: {team.home.wins}</p>
              <p>L: {team.home.losses}</p>
              <p>O: {team.home.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.away.wins}</p>
              <p>L: {team.away.losses}</p>
              <p>O: {team.away.ot}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>W: {team.lten.wins}</p>
              <p>L: {team.lten.losses}</p>
              <p>O: {team.lten.ot}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default TeamSelect

// <TeamSelectContainer>
//   {TeamInfo.map((team) => {
//     return (
//       <TeamContainer key={team.id}>
//         <Link to={`/${team.id}`} state={{ team: team.id }}>
//           <img src={team.logo} alt='team logo' />
//         </Link>
//         <div className='team-name-container'>
//           <h3> {team.name}</h3>
//         </div>
//       </TeamContainer>
//     )
//   })}
// </TeamSelectContainer>
