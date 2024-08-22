import React,{useEffect, useState} from 'react'

const useCurrencyConverter = (currency) => {
    const [data, setData] = useState({})
  useEffect(()=>{
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    const res = fetch(url)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
  },[currency])
  return data
}

export default useCurrencyConverter;