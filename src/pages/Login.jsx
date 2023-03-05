import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    }


    // PEGA DOS DADOS DO FORMULÁRIO
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // VALIDA OS CAMPOS DO FORMULÁRIO LOL
    const isValidFields = true;


    const loginUsers = (event) => {
        event.preventDefault();
        if (isValidFields) {
            navigate('/2');
        }
    }

  return (
    <>

        

            {!searchVisible && (
                <>
                <button onClick={toggleSearch}>
                   inscreva-se
                </button>
                    <h1>Login</h1>    
                    <form className='form-login' onSubmit={(event) => loginUsers(event)}>
                        <input type="text" id="email" onChange={(event) => setEmail(event.target.value)} placeholder="digite o email" autoComplete='off'/>
                        <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} placeholder="digite a senha" autoComplete='off'/>
                        <button type="submit">Entrar</button>
                    </form>
                </>
            
            )}

            <div className="search-container">
            {searchVisible && (
                <>
                <button onClick={toggleSearch}>
                login
             </button>
                <h1>formulário de cadastro</h1>
                </>
            )}
            
            </div>

    </>
  )
}

export default Login