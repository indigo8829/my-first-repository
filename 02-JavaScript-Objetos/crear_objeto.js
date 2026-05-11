//tienes este array 
let tareas = []; 

//crea una funcion que cree un objeto con titulo y completada:false. y lo añada a la array.
function crearTarea (titulo){
    //crear objeto con propiedades y parametros.
    const tarea = { 
        titulo: titulo,
        completada: false,
    }
    tareas.push(tarea);
}

crearTarea("comer");
console.log(tareas);