import React, {useContext} from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Routes,
    Navigate
} from 'react-router-dom'

import HomePage from './pages/HomePage'

import { AuthProvider, AuthContext } from './contexts/auth'
import ListUsers from './pages/ListUsers'
import Home from './pages/Home'


function AppRoutes() {

    const Private = ({children}) =>{
        const { authenticated, loading } = useContext(AuthContext)

        if(loading) {
            return <div className="loading">Carregando...</div>
        }


        if(!authenticated){
            return <Navigate to="/" />
        }

        return children
    }

    /*
    Paginas
    */
  return (
    <Router>
        <AuthProvider>
         <Routes>
                <Route exact path='/' element= {<Home />} />
                <Route exact path='/user' element= {<Private> <HomePage /> </Private>} />
                <Route path='/users' element= {<Private> <ListUsers /> </Private>} />
            </Routes>
        </AuthProvider>
    </Router>
  )
}

export default AppRoutes