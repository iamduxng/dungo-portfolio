import { Outlet } from 'react-router-dom'
import Menu from '~/components/Menu'

function Certificate() {
  return (
    <div className="bg-afternoon">
      <Menu />
      <div className="container mx-auto min-h-screen px-6 py-16 md:px-0">
        <Outlet />
      </div>
    </div>
  )
}

export default Certificate
