import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Input, Button, Select, Roles } from '@webapp/shared'
import { useActions } from '#state'
import { CreateAccountStyled, CreateAccountFormStyled } from './CreateAccount.styled'

export interface CreateAccountInputs {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: Roles
}

export const CreateAccount: FC = () => {
  const { createAccount } = useActions()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountInputs>()

  const onSubmit: SubmitHandler<CreateAccountInputs> = async (data) => {
    await createAccount(data)
    navigate('/accounts')
  }

  return (
    <CreateAccountStyled data-testid="create-account-page">
      <h2>Create Account</h2>

      <CreateAccountFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Accountname" {...register('username', { required: true })} />

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

        <Select
          label="Role"
          {...register('role')}
          options={[
            { value: Roles.ADMIN, displayValue: 'ADMIN' },
            { value: Roles.EVERYONE, displayValue: 'EVERYONE' },
          ]}
        />

        {(errors.username || errors.email || errors.password) && (
          <span style={{ color: 'red' }}>All fields are required</span>
        )}

        <Button label="Create" type="submit" />
      </CreateAccountFormStyled>
    </CreateAccountStyled>
  )
}
