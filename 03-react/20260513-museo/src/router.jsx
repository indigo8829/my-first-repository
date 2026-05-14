import { createBrowserRouter } from "react-router-dom"

import App from './App.jsx'

import Artistas from './pages/Artistas.jsx'
import Contacto from './pages/Contacto.jsx'
import Exposicion from './pages/Exposicion.jsx'
import Index from './pages/Index.jsx'

import ExpoTarjeta from "./components/ExpoTarjeta.jsx"
import ArtistaTarjeta from "./components/ArtistaTarjeta.jsx"

const router = createBrowserRouter ([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path:'',
                element: <Index />,
            },
            {
                path:'expo',
                element: <Exposicion />,
                children: [
                    {
                        path: ':id',
                        element: <ExpoTarjeta />
                    },
                ]
            },
            {
                path:'artistas',
                element: <Artistas />,
                children: [
                    {
                        path: ':id',
                        element: <ArtistaTarjeta />
                    },
                ]
            },
            {
                path:'contacto',
                element: <Contacto />,
            }
        ]
    },
])

export default router 