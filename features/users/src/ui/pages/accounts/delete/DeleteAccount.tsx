import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { DeleteAccountStyled } from './DeleteAccount.styled'

export const DeleteAccount: FC = () => {
  const params = useParams()
  const { deleteAccount, fetchAccountById } = useActions()
  const navigate = useNavigate()

  const accountById = useAppSelector((s) => s.accounts.accountById)

  useEffect(() => {
    fetchAccountById({ id: Number(params.accountId) })
  }, [])

  const handleDelete = async () => {
    const ok = window.confirm('Are you sure you want to delete this account?')
    if (!ok) return

    await deleteAccount({ id: Number(params.accountId) })
    navigate('/accounts')
  }

  if (!accountById) return <span>Account not found</span>

  return (
    <DeleteAccountStyled data-testid="delete-account-page">
      <h2>Delete Account</h2>
      <p>
        Are you sure you want to delete <b>{accountById.username}</b>?
      </p>

      <Button label="Delete" type="button" onClick={handleDelete} />
    </DeleteAccountStyled>
  )
}
