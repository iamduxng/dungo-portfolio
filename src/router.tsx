import { createBrowserRouter } from 'react-router-dom'
import Home from '~/pages/Home'
import Error from '~/pages/Error'
import Details from '~/layouts/Details'
import Skills from '~/pages/Skills'
import Projects from '~/pages/Projects'
import Certificates from '~/pages/Certificates'
import Travel from '~/pages/Travel'

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
      },
      {
        path: '/travel',
        element: <Travel />
      }
    ]
  }
]

export default createBrowserRouter(routes)
