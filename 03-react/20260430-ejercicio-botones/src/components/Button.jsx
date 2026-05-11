function Button ({nombre, hazClickCallback}) {

    {/*function hazClick (colorHex) {
        alert ("El color almacenado en el botón es " + colorHex);
    }*/}

    return (
        <div className="container">
            <button onClick={() => {hazClickCallback}}>{nombre}</button>
        </div>
    );
}

export default Button


