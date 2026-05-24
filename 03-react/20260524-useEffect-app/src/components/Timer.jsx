import { useEffect, useState } from "react";

function Timer () {
    const [count, setCount] = useState(0);

    //useEffect sin dependencias. 
    //Cada vez que cambia el contador, produce un renderizado y activa otro efecto.

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    
    return (
        <>
        <h1>He renderizado {count} veces</h1>
        </>

    )
}

export default Timer