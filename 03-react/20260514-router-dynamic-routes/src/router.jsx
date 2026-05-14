import { createBrowserRouter } from "react-router-dom";

import App from './App.jsx'
import PeliculaTarjeta from "./pages/PeliculaTarjeta.jsx";

const router = createBrowserRouter ([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path: ':idPeli',
                element: <PeliculaTarjeta/>
            },
        ]
    }
])

export default router 