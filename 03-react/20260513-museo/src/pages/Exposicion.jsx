import { Link, Outlet } from "react-router-dom"

function Exposicion () {
    return (
        <>
        <h1>Exposiciones</h1>
        <p>Selecciona una exposición:</p>
        <nav>
            <Link to="/expo/temporales">Temporales</Link>|
            <Link to="/expo/permanentes">Permanentes</Link>|
            <Link to="/expo/infantiles">Infantiles</Link>
        </nav>

        <Outlet/>
        </>

    )
}

export default Exposicion 