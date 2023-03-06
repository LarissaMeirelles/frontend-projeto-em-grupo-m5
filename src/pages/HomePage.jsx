import React, { useContext, useState } from 'react'
import BarChart from '../components/BarChart'
import { AuthContext } from '../contexts/auth'
import Extract from '../components/Extract'
import { UserData } from '../components/Data'


function HomePage() {
  const { logout } = useContext(AuthContext)



  const handleLogout = () => {
    logout()
  }

  return (
    <>
    <h1>HomePage</h1>
    <button onClick={handleLogout}>Logout</button>
    </>

  )
}

export default HomePage