import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../axios/api';
import '../css/register.css'

function Register() {

    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('prefiro não informar');
    const [endereco, setEndereco] = useState('');
    const [renda, setRenda] = useState();
    const [senha, setSenha] = useState('');

    const navigate = useNavigate()

    const fetchUsers = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {
            const post = { nome, email, nascimento, telefone, genero, endereco, renda, senha }
            
            const response = await api.post('/register', post);
            console.log(response)
        } catch (error) {
            console.log(error);
            // tratar erro aqui
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div className="loading">Carregando...</div>
    }


    return (

        <div className="form-row">
            <a className="forgot mt-3" data-toggle="modal" data-target="#modalCadastro" style={{ cursor: "pointer", fontSize: "15px" }}>
                Cadastre-se
            </a>
            <div className="modal fade" id="modalCadastro" tabIndex="-1" role="dialog" aria-labelledby="modalCadastroModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLoginModalLongTitle">Formulário de cadastro</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>

                            </button>
                        </div>

                        <div className="modal-body">
                            <div id="main-wrapper" className="container">
                                <div className="row justify-content-center">
                                    <div className="row-xl-10">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <div className="row no-gutters">
                                                    <div className="col-lg-6">
                                                        <div className="p-4">
                                                            <div className="mb-5">
                                                                <h3 className="h4 font-weight-bold text-theme">Cadastre-se</h3>
                                                            </div>
                                                            <h6 className="h5 mb-0">É rápido e fácil!</h6>
                                                            <p className="text-muted mt-2 mb-5">Preencha as informações abaixo e registre-se gratuitamente.</p>

                                                            

                                                                <form onSubmit={fetchUsers} style={{ width: "100%", padding: "30px" }}>
                                                                    <div className="form-group ">
                                                                        <label >Nome completo</label>
                                                                        <input type="text" className="form-control" id="exampleInputtext" onChange={(e) => setNome(e.target.value)} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label>Data de nascimento</label>
                                                                        <input type="date" className="form-control" id="exampleInputdate" onChange={(e) => setNascimento(e.target.value)} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="inputEstado">Gênero</label>
                                                                        <select id="inputEstado" className="form-control" onChange={(e) => setGenero(e.target.value)}>
                                                                            <option value='Prefiro não informar'>prefiro não informar</option>
                                                                            <option value="fem">feminino</option>
                                                                            <option value="masc">masculino</option>
                                                                        </select>
                                                                    </div>
                                                                    <label className="input-group" style={{ textAlign: "center" }}>Renda</label>
                                                                    <div className="input-group mb-2 mr-sm-2">
                                                                        <div className="input-group-prepend" style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginRight: '5px' }}>
                                                                            <div className="input-group-text">R$</div>
                                                                        </div>
                                                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Sua Renda" onChange={(e) => setRenda(e.target.value)} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label>Endereço de Email</label>
                                                                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputtext1">Telefone</label>
                                                                        <input type="text" className="form-control" id="exampleInputtext1" onChange={(e) => setTelefone(e.target.value)} />
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label>Endereço</label>
                                                                        <input type="text" className="form-control" id="inputAddress" onChange={(e) => setEndereco(e.target.value)} />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="control-label">Senha</label>
                                                                        <input type="password" className="form-control" id="inputPassword" placeholder="Digite sua Senha..."
                                                                            data-minlength="6" required onChange={(e) => setSenha(e.target.value)} />
                                                                        <span className="help-block min">Mínimo de seis (8) digitos</span>
                                                                    </div><br />
                                                                    <button type="submit" className="btn btn-theme botaoCad">Cadastre-se</button>
                                                                    <p className="text-black mt-3">Já tem uma conta? <a href="#" className="text-primary ml-1 entrar"><span className='entrar'>Entre</span></a></p>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 d-none d-lg-inline-block">
                                                            <div className="account-block rounded-right">
                                                                <div className="overlay rounded-right"></div>
                                                                <div className="account-testimonial">
                                                                    <h4 className="text-white mb-4">Quer economizar? Conta comigo!</h4>
                                                                    <p className="lead text-white">Aqui você encontra as melhores ferramentas para te ajudar a guardar aquela graninha no final do mês.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary botaoFechar" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            )

};

            export default Register