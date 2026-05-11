/*function Semaforo (props) {
    return (
        <h1>{props.color}</h1>
    );
}*/

/*function Semaforo ({color}) {
    let mensaje = ""; 

    if (color === "rojo") {
        mensaje = "STOP";
    } else if (color === "ambar") {
        mensaje = "PRECAUCIÓN";
    } else if (color === "verde") {
        mensaje = "ADELANTE";
    }

    return <h1>{mensaje}</h1>;
}*/

function Semaforo ({color}){
    const mensajes = {
        rojo: "STOP",
        ambar: "PRECAUCIÓN",
        verde: "ADELANTE"
    };
    
    return <h1>{mensajes[color]}</h1>;
}

export default Semaforo;