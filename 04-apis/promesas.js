//una promesa, es un objeto que representa un valor futuro.
//fetch es una función que develve un objeto PROMESA (está ejecutando la promesa).
//ese objeto significa "todavía no tengo el valor final de los datos pero estoy en ello..."

const resultado = fetch (url)
//contiene una promesa, no los datos.
//una promesa tiene estados: pending, fulfilled, rejected. 

//en el momento de crear la promesa estado: pending.
//si todo sale bien la promesa cambiará a fulfilled (y contiene un valor).
//si algo falla cambiará a rejected (y contiene un error).

.then ((resultado) => {console.log(resultado)}) 
//.then significa "cuando la promesa termine correctamente, ejecuta esto..."
//.then recibe el valor resuelto.


