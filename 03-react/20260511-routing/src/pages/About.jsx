import { Link , Outlet } from "react-router-dom"
import Miembros from "./Miembros"

function About () {
    return (
        <>
        <h1>About</h1>
            <nav>
                <Link to='/miembros'>Carlos</Link>
                <Link to='miembros'>María</Link>
                <Link to='miembros'>Xavier</Link>
            </nav>
        <Outlet/>
        </>
        
    )
}

export default About