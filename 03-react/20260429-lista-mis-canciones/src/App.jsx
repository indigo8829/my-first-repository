import datosCanciones from "./data/songs"
import SongTicket from "./components/SongTicket"

function App() {

  return (
    <>
      <h1>Lista de mis canciones favoritas</h1>

      {datosCanciones.map((cancionObjeto, idx) => {
        return (
          <SongTicket
          key={idx}
          cancionObjeto={cancionObjeto}
          />
        )
      })}
    </>
  )
}

export default App
