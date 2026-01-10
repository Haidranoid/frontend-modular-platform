import { FC } from 'react'
import { Outlet, Link } from 'react-router'

export const PublicLayout: FC = () => {
  return (
    <div>
      <Link to={`/accounts`} style={{ textDecoration: 'none', color: 'cyan' }}>
        <h3>Accounts - PublicLayout</h3>
      </Link>
      {/* will either be <Home> or <CreateAccount> */}
      <Outlet />
    </div>
  )
}
