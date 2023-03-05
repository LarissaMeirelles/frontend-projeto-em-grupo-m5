
import '../css/menus-header.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import blogFetch from "../control/axios";


const Menus = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [perfil, setPerfil] = useState(false);
    const handleClosePerfil = () => setPerfil(false);
    const handleShowPerfil = () => setPerfil(true);

    // form cadastro-despesas

    const user_id = props.user.id;
    const [name, setTitulo] = useState();
    const [value, setValor] = useState();
    const [category, setCategoria] = useState();
    const [description, setDescricao] = useState();
    const [date, setDate] = useState();

    const salvarDespesa = async (e) => {

        const post = { user_id, name, category, value, description, date };
        await blogFetch.post("/spending/", post);
        console.log(post);
        setShow(false);
      };

    return (
        
        <>

<header className="site-navbar site-navbar-target" role="banner">
    <div className="container mb-3">
        <div className="d-flex align-items-center menu">
            <div className="site-logo mr-auto">
                <a href="/">Conta Comigo</a>
            </div>
        
            <div className=" d-none d-lg-flex">
                <div className="d-flex align-items-center">
                    Bem-vindo(a), {props.user.name}!
                </div>

                    <div className="d-none d-lg-block menu-link ">
                        <Button variant="primary" onClick={handleShowPerfil}>
                            +
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="primary" onClick={handleShow}>
                            +
                        </Button>
                    
                    </div>

            </div>

            
        </div>
    </div>

    <Modal show={show} onHide={handleClose} size="lg">

        <Modal.Header closeButton>
            <Modal.Title>Adicionar nova despesa</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <form onSubmit={(e) => salvarDespesa(e)} >
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input type="text" className="form-control" id="titulo" placeholder="Digite um título"  onChange={(event) => setTitulo(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="categoria" className="form-label">Categoria</label>
                    <select id="categoria" className="form-select"  onChange={(event) => setCategoria(event.target.value)}>
                        <option>Selecione uma categoria</option>
                        <option value="moradia">Moradia</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="transporte">Transporte</option>
                        <option value="saude">Saúde</option>
                        <option value="lazer">Lazer</option>
                        <option value="pessoal">Despesas pessoais</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Valor</label>
                    <input type="text" className="form-control" id="valor" placeholder='Digite um valor'  onChange={(event) => setValor(event.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Data</label>
                    <input className="form-control" id="date" rows="3" onChange={(event) => setDate(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea className="form-control" id="descricao" rows="3"  onChange={(event) => setDescricao(event.target.value)}></textarea>
                </div>
                

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Modal.Body>

    </Modal>
    

    <Modal show={perfil} onHide={handleClosePerfil} size="lg">
                
                    <div className="modal-content">

        <Modal.Header closeButton>
            <Modal.Title>Perfil</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>

            <div className="col-md-4">
                <div className="card">
               
                <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="Admin" className="rounded-circle img-responsive" width="150" />
                            <div className="mt-3">
                                <h4>{props.user.name}</h4>
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Nome</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {props.user.name}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {props.user.email}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Telefone</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {props.user.telephone}
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Endereço</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {props.user.address}
                            </div>
                        </div>
                        <hr />
                                               
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Renda</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                R$ {props.user.income}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClosePerfil}>
                Close
            </Button>

        </Modal.Footer>
        </div>
    </Modal>
      
</header>
        </>
    )
}

export default Menus