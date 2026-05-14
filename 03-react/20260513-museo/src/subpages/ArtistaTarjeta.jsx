import { useParams } from "react-router-dom"
import artistas from "../data/artistas"

//buscar en el array el objeto concreto con la id.
//obtener los datos del artista  que coinciden con la id y la ruta.
//array.find((elementoarray) => condicion)
//recorrer array artistas y mirar que id coincide con la id de la URL. 

function ArtistaTarjeta () {
    const {id} = useParams ();
    const artistaSelecc = artistas.find((artista) => artista.id === id);
    return (
        <>
            <h1>{artistaSelecc.nombre}</h1>
        </>
    )
}

export default ArtistaTarjeta