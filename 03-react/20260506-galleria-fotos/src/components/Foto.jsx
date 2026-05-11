function Foto ({fotoObj, mensajeClickCallBack}) {
    function mensajeClick () {
        console.log("muestra galeria", typeof mensajeClickCallBack)
    }

    return (
        <div className="item" onClick={mensajeClickCallBack}>
            <img src={fotoObj.src} alt="" />
        </div>
    )
}

export default Foto