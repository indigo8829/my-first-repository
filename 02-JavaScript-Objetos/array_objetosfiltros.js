//tienes este array.
let alumnos = [
    {nombre: "Ana", nota: 8},
    {nombre: "Luis", nota: 4},
    {nombre: "Marta", nota: 7}
]

//Crear una funcion que muestre solo el NOMBRE de alumnos con nota >= 5. 
function mostrarAprobados () {
    //recorrer la array 
    for (let i=0; i < alumnos.length; i++ ){
        //condicion a cumplir 
        if (alumnos[i].nota >= 5){
            console.log (alumnos[i].nombre);
        }
    }
}

mostrarAprobados();