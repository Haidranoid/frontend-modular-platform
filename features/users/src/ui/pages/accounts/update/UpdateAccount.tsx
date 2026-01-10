import { FC, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { UpdateAccountStyled, UpdateAccountFormStyled } from './UpdateAccount.styled'

export interface UpdateAccountInputs {
  password: string
}

export const UpdateAccount: FC = () => {
  const { accountId } = useParams()
  const { updateAccount, fetchAccountById } = useActions()
  const navigate = useNavigate()

  const accountById = useAppSelector((s) => s.accounts.accountById)

  useEffect(() => {
    fetchAccountById({ id: Number(accountId) })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAccountInputs>()

  const onSubmit: SubmitHandler<UpdateAccountInputs> = async ({ password }) => {
    await updateAccount({
      id: Number(accountId),
      //@ts-ignore
      account: {
        password,
      },
    })
    navigate('/accounts')
  }

  if (!accountById) return <span>Account not found</span>

  return (
    <UpdateAccountStyled data-testid="update-account-page">
      <h2>Update Account</h2>
      <p>
        Updating account: <b>{accountById.username}</b>
      </p>

      <UpdateAccountFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="New Password"
          type="password"
          {...register('password', { required: true, minLength: 4 })}
        />

        {errors.password && <span style={{ color: 'red' }}>Password is required</span>}

        <Button label="Update" type="submit" />
      </UpdateAccountFormStyled>
    </UpdateAccountStyled>
  )
}
