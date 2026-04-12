/*Ejercicio:Gestor de Tareas en JavaScript.
Desarrollar un pequeño programa en JavaScript que permita gestionar una lista de tareas.*/

//Crear un array de Objetos. Almacenar las tareas (cada tarea es un objeto). 
//Definir el valor de las propiedades de cada objeto (tarea). 
let lista_tareas = [
    {title: "Compras", priority: 4, done:  true, id: 10},
    {title: "Bootcamp", priority: 4 , done: true, id: 20},
    {title: "Revisar Email", priority: 2, done:  false, id: 80},
    {title: "Limpieza", priority: 1, done:  true, id: 40},
    {title: "Alimentación", priority: 3, done:  true, id: 50}
];

//============CREAR LAS FUNCIONES A IMPLEMENTAR============ 
// Funcion que cree una nueva tarea (objeto) y lo añada a la lista de tareas (array).
function createTask (title, priority) {
    if (priority >=1 && priority <=5) {
        //crear objeto con sus propiedades y parametros.
        const tarea = {
        title: title,
        priority: priority,
        done: false,
        id: getMaxId()+1
        }
        //añadir el objeto a la array.
        lista_tareas.push(tarea);
    }else {
        console.log("Error: El valor introducido de priority debe estar entre 1 y 5.");
    } 

}

//llamar a la función para añadir objetos a la array.
createTask("higiene",2);
//comprobar que añade el objeto.
console.log("Nueva tarea añadida:", lista_tareas[lista_tareas.length-1]);


//Funcion que muestre la lista de tareas (según prioridad).
function showTasks (priority) {
    // Si la funcion no recibe priority (parametro)
    if (priority===undefined) {
        //recorrer el array y mostrar todas las tareas.
        for (let i = 0; i < lista_tareas.length; i++) {
            console.log(lista_tareas[i]);  
        }   
    } else { //si recibe el valor del parametro
        //recorrer el array
        for (let i = 0; i < lista_tareas.length; i++) {
            //si priority (objeto) coincide a priority (parametro)
            if (lista_tareas[i].priority == priority) {
                //mostrar esa tarea
                console.log(lista_tareas[i]);
            }            
        }
    }  
}

//llamar a la función para mostrar la lista de tareas.
//showTasks();
//showTasks(3);

//Funcion que busque y muestre el id mas alto (propiedades de los objetos).
//si el array esta vacio devuelve 0. Se usa para generar el id de nuevas tareas.
function getMaxId(){
    //declarar la variable que almacene la id del primer elemento.
    let maxId = lista_tareas[0].id ;
    // recorrer el array 
    for (let i = 0; i < lista_tareas.length; i++) {     
        //comparar el id del primer elemento  con el siguiente.
        if (lista_tareas[i].id > maxId){
            //si es mayor almacenar como nuevo maximo
            maxId = lista_tareas[i].id ;
        }
    }
    return maxId;
}

//getMaxId();
