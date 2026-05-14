import { useState } from 'react'

function Contador () {
    {/*declarar la variable e inicializar tipo numerica*/}
    const [num, setNum] = useState (0)

    return (
        <>
            <h1>Este es un contador númerico: {num}</h1>
            {/*En el evento actualizamos el estado de la variable*/}
            <button onClick={() => setNum (num +1)}>Aumentar contador</button>
        </>
    )
    
      
}

export default Contador