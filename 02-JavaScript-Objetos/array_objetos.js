// Crea un array vacio.
let personas = [];

// Crea una función. 
function crearPersona(nombre,edad){
    //creamos el objeto con sus propiedades y parametros
    const persona = {
        nombre: nombre,
        edad: edad
    };
    //añadimos el objeto al array
    personas.push(persona);
}
//llamadar a la funcion para agregar datos a la array.
crearPersona("Ana",30);
crearPersona("Miguel",39);
crearPersona("Luis",25); 

//obtener datos de la array.
console.log(personas);
//obtener datos de la array por posicion.
console.log(personas[0]);
console.log(personas[1]);
console.log(personas[personas.length-1]);