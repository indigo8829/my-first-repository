function SongTicket ({CancionObjeto}){
    
    function diHola () {
        alert ("Hola")
    }

    function karaoke () {
        alert ("Canta la canción")
    }

    function subeVolumen (direccionUrl) {
        alert ("Sube el volumen y esucha la cancion aqui " + direccionUrl )
    }
    
    function botonClick (nombreCancion) {
        alert ("Mi canción favorita es " + nombreCancion )
    }
    
    return (
        <div className="song-ticket">
            <b>Titulo:</b>{CancionObjeto.titulo}<br/>
            <b>Autor:</b>{CancionObjeto.autor}<br/>
            <b>Año:</b>{CancionObjeto.anyo}<br/>
            <b>Video Url:</b>{CancionObjeto.videoUrl}<br/>
        
            <button onClick={diHola}>Di hola</button>
            <button onClick={karaoke}>Canta</button>
            <button onClick={() => {botonClick(CancionObjeto.titulo)}}>Mi favorita</button>
            <button onClick={() => {subeVolumen(CancionObjeto.videoUrl)}}>Sube el volumen</button>
        </div>
    )
}

export default SongTicket