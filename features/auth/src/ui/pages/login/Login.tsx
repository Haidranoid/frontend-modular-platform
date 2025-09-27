import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { LoginStyled, LoginFormStyled } from './Login.styled'

export interface LoginFormInputs {
  username: string
  password: string
}

export const Login: FC = () => {
  const { login } = useActions()
  const error = useAppSelector((state) => state.error)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({ username, password }) => {
    console.log({ username, password })
    await login({ username, password })

    navigate('/auth')
  }

  //console.log(watch("username")) // watch input value by passing the name of it
  //console.log(watch("password"))
  return (
    <LoginStyled data-testid="login-page">
      <h2>Log In</h2>
      <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="username"
          type="text"
          {...register('username', {
            required: true,
            minLength: 4,
          })}
        />

        <Input
          placeholder="password"
          type="password"
          {...register('password', {
            required: true,
            minLength: 4,
          })}
        />
        {errors.username && (
          <span style={{ color: 'red' }}>username field is required</span>
        )}
        {errors.password && (
          <span style={{ color: 'red' }}>password field is required</span>
        )}
        <Button label="Continue" type="submit" />
      </LoginFormStyled>
      <span>
        create an account in{' '}
        <Link to={'/auth/signup'} style={{ textDecoration: 'none', color: 'cyan' }}>
          sign up
        </Link>
      </span>
    </LoginStyled>
  )
}
