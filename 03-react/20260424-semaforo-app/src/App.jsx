import Semaforo from './components/Semaforo';
import { useState } from "react";
import Tarjeta from './components/Tarjeta';

/* Mi app esta formada por lo siguiente...*/
// esto es un Fragment y sirve para agrupar varios elementos sin añadir un div.


/*function App() {
  return (
    <>
    <Semaforo color="rojo"/>
    <Semaforo color="ambar"/>
    <Semaforo color="verde"/>
    <Semaforo color="azul"/>
    </>
  )
}*/

/*function App() {
  const [color, setColor] = useState ("rojo");
  return (
    <>
      <Semaforo color={color}/>

      <button onClick={() => setColor("rojo")}>Rojo</button>
      <button onClick={() => setColor("ambar")}>Ámbar</button>
      <button onClick={() => setColor("verde")}>Verde</button>
    </>
  );
}*/

function App() {
  return (
    <>
      <Tarjeta nombre="Ana" edad={25} ciudad="Madrid" />
      <Tarjeta nombre="Luis" edad={28} ciudad="Sevilla" />
      <Tarjeta nombre="Kira" edad={30} ciudad="Málaga" />
    </>
  );
}

export default App;
