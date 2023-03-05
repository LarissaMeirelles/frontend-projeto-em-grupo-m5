import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/menus-header.css';
import React, { useState } from 'react';


const FooterMenus = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
    return (
        <>

        <div className="container footer-container d-block d-lg-none">
            <nav className="footer card card-icons">
                <div className="container icons">
                    <a className="navbar-brand" href="#">
                    <button type="button" className="btn btn-primary" >
                            +
                        </button>
                        </a>
                    <a className="navbar-brand" href="#">
                    <button type="button" className="btn btn-primary" >
                            +
                        </button>
                        </a>
                    <a className="navbar-brand" href="#">
                    <button type="button" className="btn btn-primary" >
                            +
                        </button>
                        </a>
                    <a className="navbar-brand" href="#">
                        <Button variant="primary" onClick={handleShow}>
                            +
                        </Button>
                        </a>
                </div>
            </nav>
        </div>    

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            Woohoo, you're reading this text in a modal!
        </Modal.Body>
        
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>

      </Modal>    
        </>
    )
}

export default FooterMenus