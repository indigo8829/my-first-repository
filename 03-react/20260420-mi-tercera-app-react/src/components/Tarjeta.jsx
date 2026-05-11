// propiedades de react (props)
// son los argumentos que se pasan a los componentes de react
// las propiedades se pasan a los componentes mediante atributos HTML. 
function Tarjeta (props) {
    return (
        <div className="tarjeta">
            <p>Mi nombre es: {props.nombre}</p>
            <p>Mi edad es: {props.edad}</p>
        </div>
    )
}

export default Tarjeta; 