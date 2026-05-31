//=================== LABORATORIO DE API FETCH CON .THEN ()====================
console.log("PASO 1. se va a iniciar la petición.")

//1. funcion fetch realiza peticion HTTP. (y devuelve una promesa (objeto promesa)) 
fetch("https://6a146e546c7db8aac0548448.mockapi.io/api/movies/6")

//2. then espera a que la promesa de fetch se resuelva. 
.then((response) => {

  //muestra el objeto completo.   
  console.log("OBJETO RESPONSE COMPLETO:")
  console.log(response)

  //muestra la propiedad status del objeto.
  console.log("STATUS:")
  console.log(response.status)

  //muestra la propiedad ok del objeto.
  console.log("¿RESPUESTA OK?")
  console.log(response.ok)

  // 3. Comprobamos errores HTTP y lanza el error al catch para capturarlo.
  if (!response.ok) {
    throw new Error('HTTP ERROR: ${response.status}')
  }

  // 4. Abrimos el "paquete", convertimos el body a JSON.
  // response.json() DEVUELVE OTRA PROMESA (objeto promesa)
  return response.json()
})

//5. Este then recibe YA los datos convertidos.
.then((data) => {
  
  console.log("DATOS FINALES:")
  console.log(data)

  console.log("TITULO:")
  console.log(data.title)

})

// 6. Capturamos errores
.catch((error) => {
  console.error("ERROR DETECTADO:")
  console.error(error)
})

// =================================EXPERIMENTO ROMPER URL==================
//Se detecta un error despues de devolver la promesa. 
//catch captura y muestra el error. En este caso: 404 - Not found