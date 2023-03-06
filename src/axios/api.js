import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://teal-strange-moose.cyclic.app'
})

export const createSession = async (email, senha) => {
    return await api.post('/login', {email, senha})
}

export const getUsers = async () =>{
    return api.get('/adm');
}
