import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import 'tailwindcss/tailwind.css'
import Modal from 'react-modal'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

Modal.setAppElement(container) //boost up the app accessiblity.
root.render(<RouterProvider router={router}></RouterProvider>)
