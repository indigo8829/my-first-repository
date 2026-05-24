import { useEffect, useState } from "react";

function ClearTimer () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        //Limpieza de efectos para reducir perdidas de memoria.
        //Incluimos un return y una funcion al final del useEffect.

        return () => clearTimeout(timer)
    },[]);
    
    return (
        <>
        <h1>He renderizado {count} veces</h1>
        </>

    )
}

export default ClearTimer