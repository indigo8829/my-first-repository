//Crea un array. 
let tareas = [];

//Crea una función.
function crearTarea(titulo, completada){
    //crear objeto con sus propiedades y parametros.
    const tarea = {
        titulo: titulo,
        completada: completada
    }
    //añadir el objeto a la array.
    tareas.push(tarea);
}
//llamar la funcion para añadir objetos a la array.
crearTarea("leer",false);
crearTarea("comprar",true);

//Crea otra función. 
function mostrarTareas(){
    for (let i = 0; i < tareas.length; i++) {
        console.log(tareas[i]);
    }
}

//llamar a la funcion para que muestre los datos de la array
mostrarTareas();