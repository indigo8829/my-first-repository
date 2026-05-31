//rescato la id de la ruta dinamica con el objeto useParams
import { useParams } from "react-router-dom"
import peliculas from "../data/peliculas";
import "./PeliculaTarjeta.css";

//buscar en el array el objeto concreto con la id.
//obtener los datos del artista  que coinciden con la id y la ruta.
//array.find((elementoarray) => condicion)
//recorrer array peliculas y mirar que id coincide con la id de la URL.

function PeliculaTarjeta () {
    //const antesImgSrc = '/antesdeti.jpg'
    //const harryImgSrc = '/harrypotter.jpg'

    const {idPeli} = useParams (); 
    //idPeli es un string comprobamos con typeof
    const idPeliNum = parseInt(idPeli);
    //modificar a numerico para poder comparar num con num
    const peliSelecc = peliculas.find((pelicula) => pelicula.id === idPeliNum);

    return (
        <>
        {/*<h2>{idPeli}</h2>
        <p>{typeof idPeli}</p>*/}
            <div className="tarjeta-peli">
                <div className="fotoPeli">
                    <img src={peliSelecc.foto} alt="" />
                </div>
                <div className="tarjeta-Texto">
                    <h1>{peliSelecc.titulo}</h1>
                    <h2>Año: {peliSelecc.anyo}</h2>
                    <h2>Género: {peliSelecc.genero}</h2>
                    <p>{peliSelecc.info}</p>
                </div>
            </div>
      
        
        </>
    )
}

export default PeliculaTarjeta