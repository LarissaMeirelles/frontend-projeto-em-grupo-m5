import React from 'react'
import Footer from '../pag inicial/Footer'
import Mycarousel from '../pag inicial/Mycarousel'
import Sobre from '../pag inicial/Sobre'
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