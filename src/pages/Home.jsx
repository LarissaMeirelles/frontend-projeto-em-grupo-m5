import React from 'react'
import Footer from '../components/Footer'
import Mycarousel from '../components/Mycarousel'
import Sobre from '../components/Sobre'
import LoginPage from './LoginPage'


function Home() {
  return (
    <div>
    <Mycarousel/>
    <Sobre/>
    <LoginPage/>
    <Footer/>
    </div>
  )
}

export default Home