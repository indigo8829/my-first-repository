import './PhotoModal.css'

// recibe como props el objeto imagen 
function PhotoModal({imgObj, onButtonCallback}) {
    return (
        // Espera y cuando se haga click aqui (button), activa el evento y ejecuta la función que me da mi padre.
        <div className="overlay">
            <img src={imgObj.src} />
            <button className="close-btn" onClick={onButtonCallback}>✕</button>
        </div>
    )
}

export default PhotoModal