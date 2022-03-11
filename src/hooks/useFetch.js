import { useState, useEffect } from 'react'
import {
  TeamInfoDataCompiler,
  rosterCompile,
} from '../functions/TeamDataCompiler'
import {
  playerInfo,
  playerStats,
  playerRankings,
} from '../functions/PlayerDataCompilers'

export const useFetch = (url, dataType) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()
        switch (dataType) {
          case 'team':
            const ti = TeamInfoDataCompiler(json)
            setData(ti)
            break
          case 'roster':
            const r = rosterCompile(json.roster)
            setData(r)
            break
          case 'playerInfo':
            const pi = playerInfo(json.people)
            setData(pi)
            break
          case 'playerRankings':
            setData(playerRankings(json.stats[0].splits[0].stat))
            break
          case 'playerStats':
            setData(playerStats(json))
            break
          default:
            break
        }
        setError(null)
        setIsPending(false)
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted')
        } else {
          setIsPending(false)
          setError(err.message)
        }
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [url, dataType])
  return { data, isPending, error }
}