import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const TeamPage = () => {
  const params = useParams()
  const { data } = useFetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${params.teamID}?expand=team.stats`
  )
  console.log(data)
  return (
    <div>
      <p>Team</p>
    </div>
  )
}

export default TeamPage
