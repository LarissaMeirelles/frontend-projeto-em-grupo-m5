import React from 'react';



function Perfil() {
    return (

        <div><div className="container">

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalPerfil">
                Meu Perfil
            </button>

            <div className="modal fade" id="modalPerfil" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Perfil</h5>

                            <div className="dropdown"><i className="fa-solid fa-user-gear dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button" aria-hidden="true"></i>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">SAC</a>
                                                            <a className="dropdown-item" href="#">Contato</a>
                                                            <a className="dropdown-item " href="#">Deletar a conta</a>
                                                            <hr />
                                                            <a className="dropdown-item" id='logout' href="#">Logout   <i class="fa-solid fa-right-from-bracket"></i> </a>
                                                            </div>
                                                    </div>


                        </div>
                        <div className="modal-body">

                            <div className="main-body">

                                <div className="row gutters-sm">
                                    <div className="col-md-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-column align-items-center text-center">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="Admin" className="rounded-circle img-responsive" width="150" />
                                                    <div className="mt-3">
                                                        <h4>Larissa Meirelles</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-md-8">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Nome</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        Larissa Meirelles
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Email</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        meirelles.lari@gmail.com
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Telefone</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        (21) 969836521
                                                    </div>
                                                </div>
                                                <hr />

                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Endereço</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        Estrada do Pontal, Recreio dos Bandeirantes, RJ
                                                    </div>
                                                </div>
                                                <hr />
                                               
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Renda</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                       R$ 10000,00
                                                       
                                                    </div>
                                                    </div>
                                                    <hr/>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>



                        </div>



                        <div className="modal-footer">
                            <button type="button" className=" btn btn-secondary botao" data-dismiss="modal">Fechar</button>

                        </div>

                        
                    </div>
                </div>
            </div>


        </div></div>
    )
}

export default Perfil
