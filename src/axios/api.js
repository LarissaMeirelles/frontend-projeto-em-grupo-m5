import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3400'
})

export const createSession = async (email, senha) => {
    return await api.post('/login', {email, senha})
}

export const getUsers = async () =>{
    return api.get('/adm');
}