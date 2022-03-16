import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRoster, getTeamStats } from '../actions/getTeamStats.actions'
import {
  rosterCompile,
  TeamInfoDataCompiler,
} from '../functions/TeamDataCompiler'

const useTeamFetch = (params) => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  useEffect(() => {
    const controller = new AbortController()
    const fetchTeamData = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${params}?expand=team.stats`,
        { signal: controller.signal }
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = response.json()

      return data
    }
    const fetchTeamRoster = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${params}/roster`,
        { signal: controller.signal }
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = response.json()
      return data
    }
    Promise.all([fetchTeamData(), fetchTeamRoster()])
      .then((values) => {
        const ti = TeamInfoDataCompiler(values[0])
        dispatch(getTeamStats(ti))
        const r = rosterCompile(values[1].roster)
        dispatch(getRoster(r))
      })
      .then(() => dispatch({ type: 'SET_LOADING_FALSE' }))
      .catch((err) => console.log(err))
  }, [])
}

export default useTeamFetch
