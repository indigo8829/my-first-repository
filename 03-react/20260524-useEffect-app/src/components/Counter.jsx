import { useEffect, useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    //useEffect, con dependencias. Depende de una variable.
    //Cuando la variable se actuliza el efecto se ejecuta nuevamente.

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <>
        <p>Recuento: {count}</p>
        <button onClick={() => setCount ((c) => c + 1 )}>+</button>
        <p>Cálculo: {calculation}</p>
        </>
    )
}

export default Counter