import { FC } from 'react'
import { Link } from 'react-router'
import { Button } from '@webapp/shared'
import { useAppSelector } from '#state'
import { HomeStyled, UsersTable } from './Home.styled'

export const Home: FC = () => {
  const users = useAppSelector((s) => s.users)

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
