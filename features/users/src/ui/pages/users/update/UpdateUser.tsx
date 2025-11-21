import { FC, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { UpdateUserStyled, UpdateUserFormStyled } from './UpdateUser.styled'

export interface UpdateUserInputs {
  password: string
}

export const UpdateUser: FC = () => {
  const { userId } = useParams()
  const { updateUser, fetchUserById } = useActions()
  const navigate = useNavigate()

  const user = useAppSelector((s) => s.userById)

  useEffect(() => {
    fetchUserById({ id: Number(userId) })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserInputs>()

  const onSubmit: SubmitHandler<UpdateUserInputs> = async ({ password }) => {
    await updateUser({
      id: Number(userId),
      //@ts-ignore
      user: {
        password
      }
    })
    navigate('/users')
  }

  if (!user) return <span>User not found</span>

  return (
    <UpdateUserStyled data-testid="update-user-page">
      <h2>Update User</h2>
      <p>
        Updating user: <b>{user.username}</b>
      </p>

      <UpdateUserFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="New Password"
          type="password"
          {...register('password', { required: true, minLength: 4 })}
        />

        {errors.password && <span style={{ color: 'red' }}>Password is required</span>}

        <Button label="Update" type="submit" />
      </UpdateUserFormStyled>
    </UpdateUserStyled>
  )
}
