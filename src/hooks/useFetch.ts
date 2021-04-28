import { useState, useEffect } from 'react'

import api from '../services/api.service'

const useFetch = (url = '', config = '') => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        api
          .get(url)
          .then(res => {
            setResponse(res.data)
          })
          .catch(err => {
            setError(err)
          })
          .finally(() => {
            setIsLoading(false)
          })
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [url, config])

  return { response, error, isLoading }
}

export default useFetch
