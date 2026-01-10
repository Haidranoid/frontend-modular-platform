import { FC, useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { HomeStyled, AccountsTable } from './Home.styled'

export const Home: FC = () => {
  const { fetchAccounts } = useActions()
  const accountsList = useAppSelector((s) => s.accounts.accountsList)

  //console.log({state});
  useEffect(() => {
    fetchAccounts()
  }, [])

  return (
    <HomeStyled data-testid="accounts-home-page">
      <h2>Accounts</h2>

      <Link to="/accounts/create">
        <Button label="Create New Account" />
      </Link>

      <AccountsTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {accountsList &&
            accountsList.length !== 0 &&
            accountsList.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>
                  {u.firstName} {u.lastName}
                </td>
                <td>{u.role}</td>
                <td>
                  <Link to={`/accounts/${u.id}/update`}>
                    <Button label="Update" />
                  </Link>
                  <Link to={`/accounts/${u.id}/delete`}>
                    <Button label="Delete" />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </AccountsTable>
    </HomeStyled>
  )
}
