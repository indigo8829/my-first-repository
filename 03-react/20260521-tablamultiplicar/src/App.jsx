import { useEffect, useState } from "react"

function App() {
  const [numBase, setNumBase] = useState (0);
  const numeros = [0,1,2,3,4,5];
  //const [titulo, setTitulo] = useState (document.title); ERROR document.tite no pertenece a REACT sino al navegador  (en HTML)!!!
  //REACT controla el DOM renderizando componentes de la interfaz.
 
  //UseEffect, espera una función + dependencias.
  useEffect (() => {
    document.title = 'Mult.' + numBase  
  }, [numBase])
  
   return (
    <>
    <h1>Tabla de Multiplicar</h1>
    <div className="controles">
      {/*toma el valor actual y devuelvelo - 1. (num => num -1) ó (num)=> {return num -1} */}
      <button onClick={() => setNumBase(num => num-1)}>-</button> 
      <p>{numBase}</p>
      <button onClick={() => setNumBase(num => num +1)}>+</button><br/>
    </div>
    <hr/>
    
    {numeros.map ((numero,i) => {
      console.log(numBase)
      return (
        <p key={i}
        numero={numero}
        >{numBase} x {numero} = {numBase * numero}</p>
      )    
    })}      
    </>
  )
}

export default App



/*<p>{numBase} x 1 = {numBase*1}</p><br/>
  <p>{numBase} x 2 = {numBase*2}</p><br/>
  <p>{numBase} x 3 = {numBase*3}</p><br/>
  <p>{numBase} x 4 = {numBase*4}</p><br/>
  <p>{numBase} x 5 = {numBase*5}</p><br/>*/






