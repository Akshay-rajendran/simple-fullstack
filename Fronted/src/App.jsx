import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter><Routes>
    <Route path="" element={<Login/>}/>
    <Route path="Signup" element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
