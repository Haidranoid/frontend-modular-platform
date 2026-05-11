import { FC } from 'react'
import { Link, Outlet } from 'react-router'

export const MainLayout: FC = () => {
  return (
    <div>
      <Link to={'/auth'} style={{ textDecoration: 'none', color: 'cyan' }}>
        <h3>Auth - PublicLayout</h3>
      </Link>
      <Outlet />
    </div>
  )
}
