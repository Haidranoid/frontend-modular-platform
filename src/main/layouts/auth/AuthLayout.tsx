import { FC } from 'react'
import { Outlet } from 'react-router'

const AuthLayout: FC = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <Outlet />
    </div>
  )
}

export default AuthLayout
