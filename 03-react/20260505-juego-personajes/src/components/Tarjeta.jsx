{/*La tarjeta solo va a mostrar DATOS*/}

function Tarjeta ({personaje}) {
      
    return (
        <div>
            {/*condicional: si no hay personaje seleccionado, debe mostrar "selecciona un pj"*/}
            {personaje ? <p>Personaje seleccionado:</p>: <p>Selecciona un personaje:</p> }

            <p>Emoji:{personaje.emoji}</p><br/>
            <p>Nombre:{personaje.nombre}</p><br/>
            <p>Arma:{personaje.arma}</p><br/>
            <p>Ataque:{personaje.ataque}</p><br/>
            <p>Energia:{personaje.energia}</p><br/>
        </div>
    )
}

export default Tarjeta