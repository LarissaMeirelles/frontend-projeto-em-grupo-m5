import { useState, useContext } from "react"
import { AuthContext } from "../contexts/auth"
import Register from "./Register"


function LoginPage() {
    const { authenticated, login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        
        login(email, password)
    }

    return (
        <>
            <div className="lgp-hd">
                <h2><strong>Faça seu login aqui!</strong></h2>
            </div>
            <div className="container login-cont">
                <div className="row">
                    <div className="col">
                        <section className="login-clean">
                            
                            <form action="" onSubmit={handleSubmit}>
                                <h2 className="sr-only">Sign in</h2>
                                <div className="illustration">
                                    <i className="icon ion-calculator"></i>
                                </div>
                                <a className="forgot" href="register.html"></a>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" name="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <a className="forgot mt-2 mb-2" data-toggle="" style={{cursor: "pointer", fontSize: '13px'}}>Esqueceu sua senha?</a>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block mt-3" type="submit">Acessar</button>
                                </div>
                            </form>
                            <Register />
                        </section>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginPage;