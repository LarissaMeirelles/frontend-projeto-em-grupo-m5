import './App.css'

import AppRoutes from './AppRoutes'
import './App.css'
import './inicial.css'
import Carossel from './Carossel';
import Sobre from './Sobre';
import Footer from './Footer';
import Formlogin from './formlogin'
function App() {

  return (
    <div className="app">
       <h1>App</h1>
       <AppRoutes />
    <Carossel/>
    <Sobre/>
   <Formlogin/>
   <Footer/>
    </div>
  )
}

export default App
