import { createBrowserRouter } from 'react-router-dom'
import Home from '~/pages/Home'
import Error from '~/pages/Error'

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  }
]

export default createBrowserRouter(routes)
