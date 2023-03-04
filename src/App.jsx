import { useState } from 'react'
import './App.css'

import AppRoutes from './AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
       <h1>App</h1>
       <AppRoutes />
    </div>
  )
}

export default App
