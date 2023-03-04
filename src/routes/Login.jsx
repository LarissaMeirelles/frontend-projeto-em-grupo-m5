import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import API from '../axios/config'
import cookie from '../function'

function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState()
  const [ info , setInfo] = useState([])

  const navigate = useNavigate()  






  const createClient = async (e) => {
    e.preventDefault()


    await API.post("/login", {
      email, senha
    })
    .then((res) => {
      cookie.setCookie('Senac', JSON.stringify(res.data), 0)
      
    })
    .catch((err)=> console.log(err))
    navigate('/')
  }

  return (
    <div className="container_login">
      <div className="login">
        <header className="header_login">
          <img src='/' alt="" />
          <span>Bem vindo!</span>
        </header>
        <form className="form_login" onSubmit={createClient}>

          <div className="container_input_login">
            <label htmlFor="email">E-mail</label>
            <input type="text" required name="email" id="email" placeholder="email.exemplo@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="container_input_login">
            <label htmlFor="password">Senha</label>
            <input type="password" required name="password" id="password" placeholder="********" onChange={(e)=> setSenha(e.target.value)}/>
          </div>
          <a href="">Esqueci minha senha</a>
          <button className="btn_login">
            Conectar
          </button>
          <div className="footer_login">
            <p>Não possui cadastro? </p>
            <Link to={`/home`}>Cadastrar-se</Link>
          </div>
        
        </form>
      </div>
    </div>
  )
}

export default Login
