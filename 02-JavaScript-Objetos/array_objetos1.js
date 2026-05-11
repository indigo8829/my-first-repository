// Tenemos un array de objetos.
let producto = [
    {nombre: "Pan", precio: 1},
    {nombre: "Leche", precio: 2},
    {nombre: "Queso", precio: 4}
];

// Crear una función que recorra la array y muestre cada producto con formato: Pan - 1€
function mostrarProductos () {
    //recorrer la array 
    for (let i=0; i < producto.length; i++ ){
        //mostrar cada producto
        console.log(producto[i].nombre," - ",producto[i].precio,"€");
    }
}

mostrarProductos();