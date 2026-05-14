import { Link , Outlet } from "react-router-dom"

function Artistas () {
    return (
        <>
        <h1>Artistas</h1>
        <p>Selecciona un artista para saber más:</p>
        <nav>
            <Link to="/artistas/van-gogh">Van Gogh</Link>|
            <Link to="/artistas/frida-kahlo">Frida Kahlo</Link>|
            <Link to="/artistas/picasso">Picasso</Link>|
            <Link to="/artistas/andy-warhol">Andy Warhol</Link>   
        </nav>

        <Outlet/>
        </>
    )
}

export default Artistas 