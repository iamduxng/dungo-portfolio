import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Modal from 'react-modal'
import { configResponsive } from 'ahooks'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'tailwindcss/tailwind.css'
import '~/css/main.css'

configResponsive({
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024
})

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

Modal.setAppElement(container) //boost up the app accessiblity.
root.render(<RouterProvider router={router}></RouterProvider>)
