import { Outlet } from 'react-router-dom'
import Menu from '~/components/Menu'

function Details() {
  return (
    <div className="bg-evening">
      <Menu />
      <div className="container mx-auto min-h-screen w-full px-6 py-20 md:px-0">
        <Outlet />
      </div>
    </div>
  )
}

export default Details
