/*function Tarjeta (props) {
    return (
        <>
            <p>Nombre: {props.nombre}</p>
            <p>Edad: {props.edad}</p>
            <p>Ciudad: {props.ciudad}</p>
        </>
    );
}*/

function Tarjeta ({nombre, edad, ciudad}) {
    return (
        <>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Ciudad: {ciudad}</p>

            {/*Condicion para la edad*/}
            <p>
                {edad > 28 ? "Mayor de 28" : "Menor o igual a 28"}
            </p>
        </>

        
    );
}


export default Tarjeta;