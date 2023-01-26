import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Contato from './Pages/Contato'
import Produtos from './Pages/Produtos'
import SobreNos from './Pages/sobreNos'
import Error from './Pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contato',
    element: <Contato />
  },
  {
    path: '/produtos',
    element: <Produtos />
  },
  {
    path: '/sobrenos',
    element: <SobreNos />
  },
  {
    path: '*',
    element: <Error />
  }
])

export { router }
