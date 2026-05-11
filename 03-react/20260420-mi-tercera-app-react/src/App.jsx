import Saludar from "./components/Saludar"
import Tarjeta from "./components/Tarjeta"
import Car from "./components/coche"

function App() {
  return(
    <div>
      <h1 class="title">Hello World</h1>
      <Saludar/>
      <Tarjeta nombre="Kira"/>
      <Tarjeta edad="6"/>
      <Car/>         
    </div>
  )
}

export default App