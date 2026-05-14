import { useParams } from "react-router-dom";
import exposiciones from "../data/exposiciones"

//buscar en el array el objeto concreto con la id.
//obtener los datos del artista  que coinciden con la id y la ruta.
//array.find((elementoarray) => condicion)
//recorrer array artistas y mirar que id coincide con la id de la URL. 

function ExpoTarjeta () {
    const {id} = useParams ();
    const expoSelecc = exposiciones.find((exposicion) => exposicion.id === id);
    return (
        <>
        <h1>{expoSelecc.tipo}</h1>
        <ul>
            <li>pintores:</li>
            <li>escultura:</li>
        </ul>
        
        </>
    )
}

export default ExpoTarjeta