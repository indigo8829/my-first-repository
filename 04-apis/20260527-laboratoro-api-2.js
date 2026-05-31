//============LABORATORIO DE API CON ASYNC/AWAIT===========================

// Declaramos función async
async function getUser() {
  //capturar errores
  try {

    console.log("INICIANDO FETCH...")

    // 1. await/ esperamos la respuesta HTTP  y guardamos resultado
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

    console.log("RESPONSE:")
    console.log(response)

    console.log("STATUS:")
    console.log(response.status)

    // 2. Comprobamos errores HTTP
    if (!response.ok) {
      throw new Error('HTTP ERROR: ${response.status}')
    }

    // 3. await/ esperamos la conversión a JSON y guardamos resultado
    const data = await response.json()

    console.log("DATOS FINALES:")
    console.log(data)

    console.log("EMAIL:")
    console.log(data.email)

  } catch (error) {

    console.error("ERROR:")
    console.error(error)

  }

}

// Ejecutamos función
getUser()

// =================================EXPERIMENTO ROMPER URL==================
