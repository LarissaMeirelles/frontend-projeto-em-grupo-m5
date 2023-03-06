import './App.css'

import AppRoutes from './AppRoutes'
<<<<<<< HEAD
import BarChart from './components/BarChart'
import { UserData } from './components/Data'

=======
import './App.css'
import './inicial.css'
import Carossel from './Carossel';
import Sobre from './Sobre';
import Footer from './Footer';
import Formlogin from './formlogin'
>>>>>>> ccf02b79905b39a57fb5f87bd6df07abf9fa5341
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
