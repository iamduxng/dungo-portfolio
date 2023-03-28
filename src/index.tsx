import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import Modal from 'react-modal'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

Modal.setAppElement(container) //boost up the app accessiblity.
root.render(<App />)
