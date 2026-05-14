import { useState } from 'react'

function ColorFavorito () {
    {/*declarar la variable e inicializar tipo string*/}
    const [color, setColor] = useState ("Rojo")

    return (
        <>
            <h1>Mi color favorito es {color}</h1>
            {/*En el evento actualizamos el estado de la variable*/}
            <button onClick={() => setColor ("Azul")}>Cambiar mi color favorito a Azul</button>
        </>
    )
    
      
}

export default ColorFavorito