import { useEffect, useState } from "react";
import './App.css'

function App() {
  //declarar variable contadora / renderizadora segundos.
  const [segundos, setSegundos] = useState(0);
  //declarar variable booleana para encender o apagar el cronometro. 
  const [cronoOn, setCronoOn] = useState(false);

  //funcion aumento de segundos y actualizacion variable.
  function miCronometro () {
    setSegundos(s => s + 1 )
  }

  //El efecto con dependencias, se ejecuta dependiendo de la variable booleana. 
  //cuando la variable se actualiza el efecto se ejecuta nuevamente.
  useEffect(() => {
    let miCrono 

    //si el cronometro esta encendido.... se activa setInterval
    if (cronoOn === true) {
      miCrono = setInterval (miCronometro, 1000);
    }
    //limpiar memoria
    return () => clearInterval(miCrono)

  //vuelve a ejecutar este efecto cuando cambie la variable cronoOn.
  }, [cronoOn])

  return (
    <>
    <h1>Han pasado {segundos} segundos</h1>

    <div className="tiempo">
      <h2>{segundos}</h2>
    </div>
    
    {/*capturar el evento y actualizar las variables correspondientes en cada boton dependiendo de la accion a realizar*/}
    <div className="controles">
      <button onClick={() => setCronoOn(true)}>Empezar</button>
      <button onClick={() => setCronoOn(false)}>Parar</button>
      <button onClick={() => {setCronoOn(false)
        setSegundos(0)}}>Reiniciar</button>
    </div>
    </>
  )
}

export default App
