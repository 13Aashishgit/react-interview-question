import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch.jsx'

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users"
  const {response,error,loading} = useFetch(API_URL)

  return (
    <>
    <h1>test</h1>
    {response.map((user)=>(
      <p key={user.id}>{user.name}</p>
    ))}
    </>
  )
}

export default App
