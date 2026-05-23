import { useState } from "react"
import Counter from "./components/Counter"
import { UserContext } from "./contexts/GlobalCounterContext";

function App() {
  const [contadorGlobal, setContadorGlobal] = useState (0);

  return (
    <>
    <h1>Global counter: 4</h1>
    <div className="box">
      <Counter />
    </div>
    <div className="box">
      <Counter />
    </div>
    <div className="box">
      <Counter />
    </div>
    <div className="box">
      <Counter />
    </div>
    </>
  )
}
export default App
