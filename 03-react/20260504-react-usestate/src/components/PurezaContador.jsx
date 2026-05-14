//Variable global, solo llamamos a la variable la primera vez y esto dara error, porque ira actualizandose mal. 
//let counterValue = 0 

function PurezaContador () {
    let counterValue = 0 

    counterValue++
    console.log(counterValue)
    return <div>{counterValue}</div>
}

export default PurezaContador