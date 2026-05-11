import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { useActions } from '#state'
import { SignupStyled, SignupFormStyled } from './Signup.styled'

export interface SignupFormInputs {
  username: string
  password: string
}

export const Signup: FC = () => {
  const { signup } = useActions()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<SignupFormInputs>()

  const onSubmit: SubmitHandler<SignupFormInputs> = async ({ username, password }) => {
    //console.log({ username, password })
    signup({ username, password })

    navigate('/auth')
  }

  return (
    <SignupStyled data-testid="signup-page">
      <h2>Signup</h2>
      <SignupFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          required
          label="username"
          labelId="username"
          placeholder="username"
          type="text"
          message={errors.username ? 'username field is required' : undefined}
          $status={errors.username ? 'error' : undefined}
          {...register('username', {
            required: true,
            minLength: 4,
          })}
        />

        <Input
          required
          label="password"
          labelId="password"
          placeholder="password"
          type="password"
          message={errors.password ? 'password field is required' : undefined}
          $status={errors.password ? 'error' : undefined}
          {...register('password', {
            required: true,
            minLength: 4,
          })}
        />
        <Button label="Continue" type="submit" />
      </SignupFormStyled>
      <span>
        create an account in{' '}
        <Link to={'/auth/login'} style={{ textDecoration: 'none', color: 'cyan' }}>
          login
        </Link>
      </span>
    </SignupStyled>
  )
}
