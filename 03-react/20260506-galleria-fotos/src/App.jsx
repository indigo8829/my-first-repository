import { useState } from 'react'
import fotoLista from './data/fotoLista'
import Foto from './components/Foto'
import './App.css'


function App() {

  function mensajeClickCallBack () {
    console.log("muestra galeria",)
  }
  
  return (
    <>
    {<!--recorrr el array de objetos (fotos) para acceder a cada una de ellas y mostrarlas-->}
    <div className="container">
        {fotoLista.map((ObjetoFoto, i) => {
          return(
            <div className="item" key={i}>
              <Foto fotoObj={ObjetoFoto}/>
            </div>
          )
        })}
    </div>
    </>
  )
}

export default App


{/*function App() {

  function mensajeClickCallBack () {
    console.log("muestra galeria",)
  }
  
  return (
    <>
    {<!--recorrr el array de objetos (fotos) para acceder a cada una de ellas y mostrarlas-->}
    <div className="container">
        {fotoLista.map((ObjetoFoto, i) => {
          return(
            <div className="item" key={i}>
              <Foto fotoObj={ObjetoFoto}/>
            </div>
          )
        })}
    </div>
    </>
  )
}*/}


{/* Primera fase para pasar de html a react
  
  function App() {
  return (
    <>
    <div className="container">
        <div class="item"><img src="https://picsum.photos/200/300" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/400/300" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/400/400" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/800/400" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/110/400" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/230/300" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/400/430" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/900/400" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/500/500" alt=""/></div>
        <div class="item"><img src="https://picsum.photos/100/900" alt=""/></div>
    </div>
    </>
  )
}*/}


