import {Link, Outlet } from "react-router-dom"

function App() {
 
  return (
    <>
      <h1>Mis películas</h1>   

      <nav className="menu-principal">
        <Link to='1'>Antes de ti</Link>|
        <Link to='2'>Erin Brockovick</Link>|
        <Link to='3'>El indomable Will Hunting</Link>|
        <Link to='4'>El principe de las mareas</Link>|
        <Link to='5'>La montaña entre nosoros</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default App