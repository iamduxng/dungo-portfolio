import { Outlet } from 'react-router-dom'
import Menu from '~/components/Menu'

function Category() {
  return (
    <div className="bg-afternoon">
      <Menu />
      <div className="container mx-auto min-h-screen w-full px-6 py-20 md:px-0">
        <Outlet />
      </div>
    </div>
  )
}

export default Category
