import { useState } from 'react'
import ColorFavorito from './components/ColorFavorito'
import Contador from './components/Contador'
import Mensaje from './components/Mensaje'
import Calculadora from './components/Calculadora'
import PurezaContador from './components/PurezaContador'

function App() {
  
  return (
    <>
    <Mensaje/>
    <Calculadora/>
    <Contador/>
    <PurezaContador/>
    <PurezaContador/>
   
    </>
  )
  
}

export default App
