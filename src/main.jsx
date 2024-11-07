import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Inicio from './Inicio.jsx'
import Deportes from './deportes.jsx'
import Tecnologia from './tegnologia.jsx'
import AddNoticias from './components/Noticas.jsx'
import About from './about.jsx'
import Estilos from './Estilo.jsx'
import Entretenimiento from './Entretenimiento.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path:"/Deportes",
    element:<Deportes/>,
  },
  {
    path:"/Tecnologia",
    element:<Tecnologia/>,
  },
  {
    path:"/addNoticias",
    element:<AddNoticias/>,
  },
  {
    path:"/Contacto",
    element:<About/>,
  }
  ,
  {
    path:"/Estilos",
    element:<Estilos/>,
  }
  ,
  {
    path:"/Entretenimiento",
    element:<Entretenimiento/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
