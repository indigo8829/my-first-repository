function SongTicket({songObj}) {

    function activarBoton(songName) {
        alert ("Me gusta la cancion " + songName)
    }

    function hacerClick (cancionNombre){
        alert("Me gusta la cacnión " + cancionNombre)
    }

    return (
        <div className="song-ticket">
            <b>Title:</b> {songObj.title} <br />
            <b>Author:</b> {songObj.author} <br />
            <b>Year:</b> {songObj.year} <br />
            <b>Video Url:</b> {songObj.videoUrl} <br />
            <button onClick={diHola}>Hola</button>
            <button onClick={() => {hacerClick(songObj.title)}}>Me gusta</button>
        </div>
    )
}


/*function SongTicket ({title, autor, year, videoUrl}) {
    return (
        <>
            <div className="song-ticket">
                <h1>Titulo:{title}</h1>
                <p>Autor: {autor}</p>
                <p>Año: {year}</p>
                <p>Video: {videoUrl}</p>
            </div>
        </>
    );

}*/


/*function SongTicket (props) {
    return (
        <>
            <h1>Title:{props.nombre}</h1>
            <p>Autor: {props.autor}</p>
            <p>Año: {props.year}</p>
            <p>Video: {props.videoUrl}</p>
        </>
    );

}*/

export default SongTicket;