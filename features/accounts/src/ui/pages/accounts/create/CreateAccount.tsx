import { FC, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Input, Button, Select, Roles } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
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
  const navigate = useNavigate()
  const { createAccount, fetchAccounts } = useActions()
  const isLoading = useAppSelector((s) => s.accounts.isLoading)

  useEffect(() => {
    fetchAccounts()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountInputs>()

  const onSubmit: SubmitHandler<CreateAccountInputs> = async (data) => {
    await createAccount(data)

    navigate('/accounts')
  }

  if (isLoading) {
    return <div data-testid="loading-component">loading...</div>
  }

  return (
    <CreateAccountStyled data-testid="create-account-page">
      <h2>Create Account</h2>

      <CreateAccountFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          labelId="username"
          label="username"
          placeholder="Accountname"
          {...register('username', { required: true })}
        />

        <Input
          labelId="email"
          label="email"
          placeholder="Email"
          type="email"
          {...register('email', { required: true })}
        />

        <Input
          labelId="password"
          label="password"
          placeholder="Password"
          type="password"
          {...register('password', { required: true, minLength: 4 })}
        />

        <Input
          labelId="firstName"
          label="firstName"
          placeholder="First Name"
          {...register('firstName', { required: true })}
        />
        <Input
          labelId="lastName"
          label="lastName"
          placeholder="Last Name"
          {...register('lastName', { required: true })}
        />

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
