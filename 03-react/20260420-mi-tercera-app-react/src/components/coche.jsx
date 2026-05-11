// propiedades de react (props) el nombre del objeto es props, pero puedes llamarlo como quieras.
// son los argumentos que se pasan a los componentes de react
// las propiedades se pasan a los componentes mediante atributos HTML. 

import { createRoot } from 'react-dom/client'

function Car(myobj) {
  return (
    <h2>Yo soy un {myobj.model}!</h2>
  );
}

let x = "Gasolina"
const carInfo = ["Ford", "Mustang"];


createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} combustible={x} carinfo={carInfo}/>
);

//los atributos también son la forma de pasar datos de un componente a otro, como parámetros

function Garage() {
  return (
    <>
      <h1>¿Qué está guardado en mi garaje?</h1>
      <Car brand="Ford" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);

// para poder exportar la función
export default Car;


