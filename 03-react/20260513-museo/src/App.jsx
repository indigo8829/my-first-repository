import { Link, Outlet } from "react-router-dom"

function App() {
  
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>|
        <Link to='expo'>Exposiciones</Link>|
        <Link to='artistas'>Artistas</Link>|
        <Link to='contacto'>Contacto</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default App
