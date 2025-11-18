import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Input, Button, Select, Roles } from '@webapp/shared'
import { useActions } from '#state'
import { CreateUserStyled, CreateUserFormStyled } from './CreateUser.styled'

export interface CreateUserInputs {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: Roles
}

export const CreateUser: FC = () => {
  const { createUser } = useActions()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInputs>()

  const onSubmit: SubmitHandler<CreateUserInputs> = async (data) => {
    await createUser(data)
    navigate('/users')
  }

  return (
    <CreateUserStyled>
      <h2>Create User</h2>

      <CreateUserFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Username" {...register('username', { required: true })} />

        <Input
          placeholder="Email"
          type="email"
          {...register('email', { required: true })}
        />

        <Input
          placeholder="Password"
          type="password"
          {...register('password', { required: true, minLength: 4 })}
        />

        <Input placeholder="First Name" {...register('firstName', { required: true })} />
        <Input placeholder="Last Name" {...register('lastName', { required: true })} />

        <Select label="Role" {...register('role')}>
          <option value={Roles.ADMIN}>ADMIN</option>
          <option value={Roles.EVERYONE}>EVERYONE</option>
        </Select>

        {(errors.username || errors.email || errors.password) && (
          <span style={{ color: 'red' }}>All fields are required</span>
        )}

        <Button label="Create" type="submit" />
      </CreateUserFormStyled>
    </CreateUserStyled>
  )
}
