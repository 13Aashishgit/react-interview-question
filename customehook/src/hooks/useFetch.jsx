import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useFetch = (API_URL) => {
    const [response,setResponse] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState({})

    useEffect(() => {
        const getData = async()=>{
        try {
            setLoading(true)
            const res =await axios.get(API_URL);
            setResponse(res.data)
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }}
        getData()
      
    }, [API_URL])
    

  return (
    { response, error, loading }
  )
}

export default useFetch;