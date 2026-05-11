// recibe como props el objeto imagen y una funcion del padre.
function PhotoHolder({imgObj, onImgClickCallback}) {
  return (
    // Espera y cuando se haga click aqui (div), activa el evento y ejecuta la función que me da mi padre y pasale la img.
  
    <div className="item" onClick={ (e) => {onImgClickCallback(imgObj)} }>
        <img src={imgObj.src} alt="" />
    </div>
  )
}

export default PhotoHolder
