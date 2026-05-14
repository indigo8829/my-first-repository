import { Link, Outlet } from "react-router-dom"

function App() {
  
  return (
    <>
      <h1>App</h1>

      <nav>
        <Link to='/about'>About</Link>
        <Link to="/">Home</Link>
        <a href ="/">Home</a>
      </nav>
      <Outlet/>
      <div>====Footer====</div>
    </>
  )
}

export default App
