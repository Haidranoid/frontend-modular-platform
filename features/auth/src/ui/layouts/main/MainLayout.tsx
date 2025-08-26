import { FC } from 'react'
import { Outlet } from 'react-router'

export const MainLayout: FC = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <Outlet />
    </div>
  )
}
