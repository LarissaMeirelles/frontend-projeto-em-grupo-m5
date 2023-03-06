import React from 'react'

function Footer() {
  return (
    <div className="footer-basic rodape mt-0">
        
        <footer >
            <div className="social p-3" ><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Serviços</a></li>
                <li className="list-inline-item"><a href="#">Sac</a></li>
                <li className="list-inline-item"><a href="#">Dúvidas</a></li>
                <li className="list-inline-item"><a href="#">Politica Privacidade</a></li>
                <li className="list-inline-item"><a href="#">Contatos</a></li>
            </ul>
            <p className="copyright pb-3">ContaComigo © 2021</p>
        </footer>
    </div>

  )
}

export default Footer