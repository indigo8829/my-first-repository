import Button from "./components/button"

const botonArray = [
  {
    titulo: "Rojo",
    color: "#ff0000",
  },
  {
    titulo: "Azul",
    color: "#0000ff",
  },
  {
    titulo: "Verde",
    color: "#00ff00",
  }
]


function App() {
  
  function hazClick (colorHex) {
    alert (colorHex)
  }

  return (
    <>
      <div className="gran-container">
        {botonArray.map((boton, i) => {
          return (
            <Button
            key={i}
            boton={boton}
            nombre={boton.titulo}
            color={boton.color}
            hazClickCallback={hazClick}
            />
          )
        })}
      </div>  
    </>
  )
}
export default App




{/*const botones = ["Boton","Boton","Boton","Boton","Boton"]
  
  function App() {
  return (
    <>
      <div className="gran-container">
        {botones.map((boton, i) => {
          return (
            <Button
            key={i}
            boton={boton}
            nombre={ boton + (i + 1)}
            />
          )
        })}
      </div>  
    </>
  )
}*/}


{/*function App() {
  return (
    <>
    <div className="gran-container">
      <Button nombre="nombre"/>
    </div>  
    </>
  )
}*/}