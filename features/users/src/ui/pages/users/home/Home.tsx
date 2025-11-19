import { FC, useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { HomeStyled, UsersTable } from './Home.styled'

export const Home: FC = () => {
  const { fetchUsers } = useActions()
  const users = useAppSelector((s) => s.users)

  useEffect(() => {
    fetchUsers({ TEST: '123' })
  }, [])

  return (
    <HomeStyled>
      <h2>Users</h2>

      <Link to="/users/create">
        <Button label="Create New User" />
      </Link>

      <UsersTable>
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
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>
                {u.firstName} {u.lastName}
              </td>
              <td>{u.role}</td>
              <td>
                <Link to={`/users/update/${u.id}`}>
                  <Button label="Update" />
                </Link>
                <Link to={`/users/delete/${u.id}`}>
                  <Button label="Delete" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </UsersTable>
    </HomeStyled>
  )
}
