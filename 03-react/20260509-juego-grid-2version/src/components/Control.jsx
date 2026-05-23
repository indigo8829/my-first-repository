import './Control.css'

function Control ({clickBotonIzqCallback, clickBotonDerCallback, clickBotonAbjCallback, clickBotonArrCallback}) {
    return (
        //Espera y cuando se haga click en button, activa el evento y ejecuta la funcion que me da mi padre.
        <div className="buttons">
            <button onClick={clickBotonIzqCallback}>←</button>
            <button onClick={clickBotonArrCallback}>↑</button>
            <button onClick={clickBotonDerCallback}>→</button>
            <button onClick={clickBotonAbjCallback}>↓</button>
        </div>
    )
}

export default Control


{/*<div className="buttons">
      <button>&larr;</button>
      <button>&rarr;</button>
      <button>&uarr;</button>
      <button>&darr;</button>
    </div>*/}