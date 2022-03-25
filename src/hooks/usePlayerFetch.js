import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getPlayerInfo,
  getPlayerLastTen,
  getPlayerRanks,
} from '../actions/playerInfo.actions'

const usePlayerFetch = (params) => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  useEffect(() => {
    dispatch({ type: 'SET_LOADING_TRUE_PI' })
    const controller = new AbortController()
    const fetchPlayerInfo = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${params.playerID}`,
        { signal: controller.signal }
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = response.json()

      return data
    }
    const fetchPlayerRankings = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${params.playerID}/stats?stats=regularSeasonStatRankings&season=20212022`,
        { signal: controller.signal }
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = response.json()
      return data
    }
    const fetchPlayerGameLog = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${params.playerID}/stats?stats=gameLog&season=20212022`,
        { signal: controller.signal }
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = response.json()
      return data
    }
    Promise.all([
      fetchPlayerInfo(),
      fetchPlayerRankings(),
      fetchPlayerGameLog(),
    ])
      .then((values) => {
        dispatch(getPlayerInfo(values[0].people[0]))
        dispatch(getPlayerRanks(values[1].stats[0].splits[0].stat))
        dispatch(getPlayerLastTen(values[2].stats[0].splits.slice(0, 10)))
      })
      .then(() => dispatch({ type: 'SET_LOADING_FALSE_PI' }))
      .catch((err) => {
        setError(err.message)
      })
  }, [dispatch, params.playerID])
  return { error }
}

export default usePlayerFetch
