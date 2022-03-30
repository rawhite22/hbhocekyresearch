import { useEffect, useState } from 'react'

const useStandings = () => {
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
  return { data, loading, error }
}

export default useStandings
