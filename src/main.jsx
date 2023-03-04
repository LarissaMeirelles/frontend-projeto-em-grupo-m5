import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

// Paginas
import Cadastro from './routes/Login'
import Home from './routes/Home'
import Login from './routes/Login'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
       path: "/",
       element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // envelopamento para todas as páginas conseguirem usar o carrinho
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)