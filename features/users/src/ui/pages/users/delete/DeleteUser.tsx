import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { DeleteUserStyled } from './DeleteUser.styled'

export const DeleteUser: FC = () => {
  const params = useParams()
  const { deleteUser, fetchUserById } = useActions()
  const navigate = useNavigate()

  const user = useAppSelector((s) => s.userById)

  useEffect(() => {
    fetchUserById({ id: Number(params.userId) })
  }, [])

  const handleDelete = async () => {
    const ok = window.confirm('Are you sure you want to delete this user?')
    if (!ok) return

    await deleteUser({ id: Number(params.userId) })
    navigate('/users')
  }

  if (!user) return <span>User not found</span>

  return (
    <DeleteUserStyled data-testid="delete-user-page">
      <h2>Delete User</h2>
      <p>
        Are you sure you want to delete <b>{user.username}</b>?
      </p>

      <Button label="Delete" type="button" onClick={handleDelete} />
    </DeleteUserStyled>
  )
}
