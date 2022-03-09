import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const response = await fetch(url)
        const json = await response.json()
        setIsPending(false)
        setData(json)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchData()
  }, [url])
  return { data, isPending, error }
}
