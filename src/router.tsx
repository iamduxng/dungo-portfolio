import { createBrowserRouter } from 'react-router-dom'
import Home from '~/pages/Home'
import Error from '~/pages/Error'
import Details from '~/layouts/Details'
import Skills from '~/pages/Skills'
import Projects from '~/pages/Projects'
import Certificates from '~/pages/Certificates'

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/',
    element: <Details />,
    children: [
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/certificates',
        element: <Certificates />
      }
    ]
  }
]

export default createBrowserRouter(routes)
