//importar paquetes
import { createBrowserRouter } from 'react-router-dom'

//importar componentes, docs... 
import App from './App.jsx'
import About from './pages/About.jsx'
import Miembros from './pages/Miembros.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
        {
            path: 'about',
            element: <About/>,
            children: [
                {
                    path: 'miembros',
                    element: <Miembros/>
                },
            ]
        }
    ]
  },
])

export default router