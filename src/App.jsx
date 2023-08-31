import {  } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Exemplo1 from './Exemplo1'
import Exemplo2 from './Exemplo2'
import Exemplo3 from './Exemplo3'

function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}/>
          <Route path="/Exemplo1" element={<Exemplo1/>}/>
          <Route path="/Exemplo2" element={<Exemplo2/>}/>
          <Route path="/Exemplo3" element={<Exemplo3/>}/>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
