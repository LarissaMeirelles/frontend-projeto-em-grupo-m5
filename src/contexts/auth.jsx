import React, { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import cookie from '../axios/function'
import { api, createSession } from '../axios/api'


export const AuthContext = createContext("")

export const AuthProvider = ({children})=> {

    const navigate = useNavigate()
    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const recoveredUser = cookie.getCookie('user')
    
        if (recoveredUser) {
            setUser(recoveredUser);
        }
    
        setLoading(false)
    }, [])


    const login = async (email, password) => {
        

        const response = await createSession(email, password)

        const loggedUser = response.data.user;
        const token = response.data.token
        
        
        cookie.setCookie('user', JSON.stringify(loggedUser), 1)
        cookie.setCookie('token', token)

        api.defaults.headers.Authorization = `Bearer ${token}`
 
        
        setUser(loggedUser)
        navigate("/user")
    }

    const logout = () => {
        console.log('logout')

        cookie.removeCookie('user')
        cookie.removeCookie('token')

        api.defaults.headers.Authorization = null

        setUser(null)
        navigate("/")
    }


    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
