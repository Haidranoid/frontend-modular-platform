import React, { FC, useState } from 'react'
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  Avatar,
} from '@mui/material'
import { Paths } from '@routes'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { LockOutlined } from '@mui/icons-material'
import useActions from '@hooks/use-actions'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectAuthStatus } from '@selectors/authentication'
import { useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
}))

const Login: FC = () => {
  //const history = useHistory()
  const location = useLocation<{ from?: string }>()
  const history = useHistory()

  const classes = useStyles()
  const { login } = useActions()
  const { loading } = useTypedSelector(selectAuthStatus)

  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  //const [showPassword, setPassword] = useState(false)
  const [email, setEmail] = useState('admin@hotmail.com')
  const [password, setPassword] = useState('12345678')
  const [showPassword, setShowPassword] = useState(false)

  const handleLoginSuccess = () => {
    const redirectTo = location.state?.from || Paths.HOME
    history.replace(redirectTo)
  }

  const handleLogin = () => {
    login({ email, password }, handleLoginSuccess)
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      data-testid="login-page"
      aria-label="Bienvenido a la pagina de inicio de sesión"
    >
      <CssBaseline />
      <div className={classes.paper} role="presentation">
        <Avatar className={classes.avatar} role="img" aria-label="Icono de candado">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" role="heading" aria-level={1}>
          Login
        </Typography>
        <form
          className={classes.form}
          noValidate
          aria-label="Formulario para el inicio de sesión"
        >
          <span id="email-helper" style={{ position: 'absolute', left: '-9999px' }}>
            Campo para introducir tu correo electronico. campo obligatorio
          </span>
          <TextField
            id="email"
            label="Email"
            color="primary"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{
              'aria-labelledby': 'email-helper',
            }}
          />
          <span id="password-helper" style={{ position: 'absolute', left: '-9999px' }}>
            Campo para introducir tu contraseña. campo obligatorio
          </span>
          <TextField
            id="password"
            label="Contraseña"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            type={showPassword ? 'text' : 'password'}
            inputProps={{
              'aria-labelledby': 'password-helper',
            }}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLogin()
              }
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="showPassword"
                color="default"
                checked={showPassword}
                onChange={() => {
                  setShowPassword((v) => {
                    if (!v) {
                      // @ts-ignore
                      document.getElementById('password')?.focus({ force: true })
                    }
                    return !v
                  })
                }}
                inputProps={{
                  'aria-label': `casilla para ${showPassword ? 'ocultar' : 'mostrar y leer'} la contraseña`,
                }}
              />
            }
            label="Mostrar contraseña"
          />
          <Button
            fullWidth
            aria-label="Click para iniciar sesión"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            {loading ? 'Loading...' : 'Continuar'}
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Login
