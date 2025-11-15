import { FC } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { DeleteUserStyled } from './DeleteUser.styled'

export const DeleteUser: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { deleteUser } = useActions()

  const user = useAppSelector((s) => s.users.entities[id!])

  const handleDelete = async () => {
    const ok = window.confirm('Are you sure you want to delete this user?')
    if (!ok) return

    await deleteUser(Number(id))
    navigate('/users')
  }

  if (!user) return <span>User not found</span>

  return (
    <DeleteUserStyled>
      <h2>Delete User</h2>
      <p>
        Are you sure you want to delete <b>{user.username}</b>?
      </p>

      <Button label="Delete" type="button" onClick={handleDelete} />
    </DeleteUserStyled>
  )
}
