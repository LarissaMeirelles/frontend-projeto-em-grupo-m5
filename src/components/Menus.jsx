import '../css/menus-header.css';
import { AuthContext } from '../contexts/auth'
import React, { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { api } from "../axios/api";
import cookie from '../axios/function';

const Menus = (props) => {
    const { logout } = useContext(AuthContext)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [perfil, setPerfil] = useState(false);
    const handleClosePerfil = () => setPerfil(false);
    const handleShowPerfil = () => setPerfil(true);


    const handleLogout = () => logout()


    // form cadastro-despesas

    const [valor, setValor] = useState();
    const [categoria, setCategoria] = useState();
    const [categorias, setCategorias] = useState([])
    const [data, setData] = useState();
    const [userr, setUsuario] = useState([])
    const info = cookie.getCookie('info');
    const user = JSON.parse(info)



    const getCategories = async () => {
        const token = cookie.getCookie('token');
        api.defaults.headers.Authorization = `Bearer ${token}`

        const response = await api.get('/categories')
        const categories = response.data.result
        setCategorias(categories)
    }


    const salvarDespesa = async (e) => {
        e.preventDefault()
        const token = cookie.getCookie('token');
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const categoriaObj = categorias.find(cat => cat.c_name === categoria);
        const categoriaId = categoriaObj ? categoriaObj.c_id : null;

        const post = { categoria: categoriaId, data, valor };
        await api.post("/spending", post);
        console.log(post);
        setShow(false);
    };



    useEffect(() => {
        setUsuario([user])

        getCategories()
    }, [])

    return (

        <>
            {
                userr.map((usuario) => (
                    <header className="site-navbar site-navbar-target" role="banner" key={usuario.u_id}>
                        <div className="container mb-3">
                            <div className="d-flex align-items-center menu">
                                <div className="site-logo mr-auto">
                                    <a href="/">Conta Comigo</a>
                                </div>

                                <div className=" d-none d-lg-flex">
                                    <div className="d-flex align-items-center">
                                        Bem-vindo(a), {usuario.u_name}!
                                    </div>

                                    <div className="d-lg-flex justify-content-around menu-link " style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Button variant="primary" onClick={handleShowPerfil}>
                                            +
                                        </Button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={handleShow}>
                                            +
                                        </Button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={handleLogout}>
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


                                <form onSubmit={salvarDespesa} >
                                    <div className="mb-3">
                                        <label htmlFor="categoria" className="form-label">Categoria</label>
                                        <select id="categoria" className="form-select" onChange={(event) => setCategoria(event.target.value)}>
                                            <option>Selecione uma categoria</option>

                                            {categorias.map((cat) => (


                                                <option value="moradia" key={cat.c_id}>{cat.c_name}</option>


                                            ))}


                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="valor" className="form-label">Valor</label>
                                        <input type="text" className="form-control" id="valor" placeholder='Digite um valor' onChange={(event) => setValor(event.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Data</label>
                                        <input type="date" className="form-control" id="date" rows="3" onChange={(event) => setData(event.target.value)} />
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
                                                    <h4>{usuario.u_name}</h4>
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
                                                        {usuario.u_name}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Email</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {usuario.u_email}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Telefone</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {usuario.u_telephone}
                                                    </div>
                                                </div>
                                                <hr />

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Endereço</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {usuario.u_address}
                                                    </div>
                                                </div>
                                                <hr />

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Renda</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        R$ {usuario.u_income}
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
                ))
            }

        </>
    )
}

export default Menus