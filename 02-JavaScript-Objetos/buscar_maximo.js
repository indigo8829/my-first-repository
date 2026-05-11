//tienes esta array
let numeros = [3, 7, 2, 9, 5];

//crea una funcion para obtener el numero mas grande.
function obtenerMayor() {
    //declarar una variable que almacene el mayor
    let mayor = numeros[0];
    //recorrer la array
    for (let i = 0 ; i < numeros.length ; i++ ) {
        //si numeros es mayor a mayor sustituir su valor
        if (numeros[i] > mayor){
            mayor = numeros [i];
        }
    }
    return mayor;    
}

obtenerMayor();
console.log(obtenerMayor());