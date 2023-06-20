import { createHashRouter } from 'react-router-dom'
import Home from '~/pages/Home'
import Error from '~/pages/Error'
import Skills from '~/pages/Skills'
import Projects from '~/pages/Projects'
import Travel from '~/pages/Travel'

import Category from '~/layouts/Category'
import About from '~/layouts/About'

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/category',
    element: <Category />,
    children: [
      {
        path: '/category/skills',
        element: <Skills />
      },
      {
        path: '/category/projects',
        element: <Projects />
      }
    ]
  },
  {
    element: <About />,
    children: [
      {
        path: '/about/travel',
        element: <Travel />
      }
    ]
  }
]

// TODO: HashRouter was used for GH Page
// Change back to BrowserRouter when deploy on other server
// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
export default createHashRouter(routes)
