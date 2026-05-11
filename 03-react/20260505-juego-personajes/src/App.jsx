import { useState } from 'react'
import './App.css'
import personajes from './data/personajes'
import Tarjeta from './components/Tarjeta'

function App() {
  
  const [personajeSelec, setPersonajeSelec ] = useState ("")

  return (
    <>
      {/*recorrer el array de objetos para acceder a los personajes y crear un botón por cada uno de ellos*/}
      <div className="contenedor-personajes">
        {personajes.map((ObjetoPersonaje, i) => {
          return (
            <button
            key={i}
            ObjetoPersonaje={ObjetoPersonaje}
            onClick={() => setPersonajeSelec(ObjetoPersonaje)
            }>{ObjetoPersonaje.nombre}</button>
          )
        })}
        <Tarjeta personaje={personajeSelec}/>
      </div>
    </>
  )
}

export default App
