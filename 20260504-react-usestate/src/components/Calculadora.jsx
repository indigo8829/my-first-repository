import { useState } from 'react'

function Calculadora () {
    {/*declarar la variable e inicializar tipo numerica*/}
    const [contador, setContador] = useState (0)

    return (
        <>
            <h1>Este es un contador númerico: {contador}</h1>
            {/*En el evento actualizamos el estado de la variable*/}
            <button onClick={() => setContador (contador +1)}>Aumentar contador</button>
            <button onClick={() => setContador (contador -1)}>Disminuir contador</button><br/>

            {/*Condición para mostrar un mensaje si se cumple muestra expresión 1 sino expresion 2*/}
            {contador > 5 ? <h2>alto</h2>: <h2>bajo</h2>}
        </>
    )
    
      
}

export default Calculadora