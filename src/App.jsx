import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
    <Outlet /> 
    </>
  )
}

export default App
