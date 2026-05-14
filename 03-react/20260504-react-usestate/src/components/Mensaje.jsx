import { useState } from 'react'

function Mensaje () {
    {/*declarar la variable e inicializar tipo booleano */}
    const [mostrarMensaje, setMostrarMensaje] = useState (false)

    return (
        <>
            <h1>Esto es un mensaje:</h1>
            {/*En el evento actualizamos el estado de la variable, definimos una condicion con el operador ternario, 
            cuando sea diferente actualizamos el estado (cambia de true/false)
            condición ? expresion (true) : expresion (false)
            */}
            <button onClick={() => setMostrarMensaje (!mostrarMensaje)}>{mostrarMensaje ? <p>---</p> : <p>hola</p>}</button><br/>
            
            {/*otra forma es mostrar el mensaje fuera del boton*/}
            <button onClick={() => setMostrarMensaje (!mostrarMensaje)}>Cambiar mensaje</button>

            {mostrarMensaje ? <p>hola</p> : <p>---</p>}

            {/*si es true muestra el mensaje */}
            {mostrarMensaje && <p>hola</p>}

        </>
    )
    
      
}

export default Mensaje