import { FC } from 'react'
import { Outlet, Link } from 'react-router'

export const MainLayout: FC = () => {
  return (
    <div>
      <Link to={`/accounts`} style={{ textDecoration: 'none', color: 'cyan' }}>
        <h3>Accounts - MainLayout</h3>
      </Link>
      <Outlet />
    </div>
  )
}
