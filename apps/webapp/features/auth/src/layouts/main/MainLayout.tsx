import { FC } from 'react'
import { Outlet } from 'react-router'

const MainLayout: FC = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <Outlet />
    </div>
  )
}

export default MainLayout
