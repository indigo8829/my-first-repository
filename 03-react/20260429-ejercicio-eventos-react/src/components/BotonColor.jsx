function BotonColor ({color, textoColor, talla}) {

    function hacerClick () {
        alert ("Has hecho click en el boton")
    }


    function clickBoton (color) {
        alert ("Has hecho click en el boton de color: "+ color)
    }

    return (
        <div>
           {/* <button className={`${color} ${talla}`} onClick={hacerClick}>{textoColor}</button> */}
           <button className={`${color} ${talla}`} onClick={() => {clickBoton (color)}}>{textoColor}</button>
        </div>
    )
}
export default BotonColor
