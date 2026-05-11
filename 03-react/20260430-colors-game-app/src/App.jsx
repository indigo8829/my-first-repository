import { useState } from "react"
import Button from "./components/Button"
import buttonsList from "./data/buttonsList"

function App() {
  {/*declarar la variable e inicializar vacio */}
  const [ color, setColor] = useState ("")

  // Creamos una función (callback) para que el componente hijo la pueda llamar
  function onBtnClick(colorHex) {
    {/*actualizar el valor de setColor llamando al hijo */}
    setColor(colorHex)
    console.log("[App.jsx] Botton clicked: ", colorHex)
  }

  return (
    <div className="container">
      { buttonsList.map((el, idx) => {
        return (
          <Button key={idx}
              btnData={el}
              onBtnClickCallback={onBtnClick} // Aquí pasamos la función (callback) al hijo a través de la propiedad
          />
        )
      }) }
      {/* renderizar la variable */}
      <h1>{color}</h1>
    </div>
  )
}

export default App
