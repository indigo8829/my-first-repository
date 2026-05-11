import Control from "./components/Control"
import { useState } from "react";

function App() {
  //Declaro una array con 100 elementos inicializados nulos (vacios). 
  const gridArr = Array(100).fill(null)
  
  //====== PRUEBO A TRABAJAR CON CELDA (1 DIMENSION)===== 
  //Declaro una variable que pueda actualizar cuando sea necesario para almacenar la celda seleccionada y renderizarla.
  //Inicializo con el valor 0 (posicion del elemento). 
  //const [CeldaSelect, setCeldaSelect] = useState (0);

  //====== PASO A TRABAJAR EN (2 DIMENSIONES X,Y) ======
  //1. Declaro una variable que cambie y renderice, define la (posicion) fila de la celda .
  const [FilaSelect, setFilaSelect] = useState (0);
  //3. Declaro una variable que cambie y renderice, define la (posicion) columna de la celda .
  const [ColSelect, setColSelect] = useState (0);

  //===============FUNCIONES EN EL PADRE PARA CONTROL.JSX================
  function clickBotonDer () {
    //1. Comprobar en que posicion se situa la celda seleccionada y si podemos avanzar o estamos en el limite.
    //CeldaSelect<9 ? console.log("avanza"): alert("estas en el límite")
    //2. Si avanza (condicion true) actualiza la variable que almacena la celda seleccionada.
    //setCeldaSelect(CeldaSelect+1)
    //3. Actualizo condición verdadera ya que no necesito imprimir sino actualizar variable.
    //CeldaSelect<9 ? setCeldaSelect(CeldaSelect+1): alert("estas en el límite")
    //--------(2 DIMENSIONES) adaptar condicion.
    ColSelect<9 ? setColSelect(ColSelect+1) : alert("estas en el límite")
  }

  function clickBotonIzq () {
    ColSelect>0 ? setColSelect(ColSelect-1) : alert("estas en el límite")
  }

  function clikBotonAbj () {
    FilaSelect<9 ? setFilaSelect(FilaSelect+1) : alert("estas en el límite")
  }

  function clickBotonArr () {
    FilaSelect>0 ? setFilaSelect(FilaSelect-1) : alert("estas en el límite")
  }

  return (
    //1. Recorrer el array de los elementos y devolver por cada elemento un div (celda).
    //2. Condicion: la clase de la celda cambia según cambie el estado seleccionada/no selecionada.
    //Nota: cuando estado de la celda cambie renderiza,recorre map, compara...
    //3. Pasar los props al componente Control (botones)para la comunicacion padre-hijo.
    <>
    <div className="contenedor">
      {gridArr.map ((objCelda, i) => {
        
        //Declaro 2 variables que iteren sobre fila/columna completas 
        //necesito un que el numero cambie automaticamente por eso uso (i)
        const fila = Math.floor (i/10)
        const col =  i % 10

        //La classe es definida por las coordenadas (X, Y) de la celda, cuando 
        // se cumplen ambas condiciones obtiene las coordenadas.
        return <div 
        className={ fila === FilaSelect && col === ColSelect ? "celda-elegida" : "celda"}
        //className={i=== CeldaSelect ? "celda-elegida" : "celda"}
        key={i}
        >
        </div>
      })}
    </div>
    <Control clickBotonIzqCallback={clickBotonIzq} clickBotonDerCallback={clickBotonDer} 
    clickBotonAbjCallback={clikBotonAbj} clickBotonArrCallback={clickBotonArr}/>
    </>
  )
}

export default App
