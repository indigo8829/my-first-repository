import { useEffect, useState } from "react";

function Stop () {
    const [count, setCount] = useState(0);

    // useEffect, con dependencias vacias.
    // El efecto se ejecuta unicamente en el renderizado inicial.

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);
    
    return (
        <>
        <h1>He renderizado {count} veces</h1>
        </>

    )
}

export default Stop