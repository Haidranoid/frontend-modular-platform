import React, { FC, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Input from '@components/input/Input'
import Select from '@components/select/Select'
import ActionButtons from '@components/action-buttons/ActionButtons'
import { User } from '@interfaces/authentication/authentication.types'
import { UserRoles } from '@constants'
import { StudentDisability } from '@constants'
import { createUser, updateUser } from '@actions-creators/users/usersAC'

export const dummyUser: User = {
  id: 0,
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  role: UserRoles.STUDENT,
}

export interface UserViewerProps {
  mode: 'read' | 'edit' | 'create'
  user?: User
  handleOnCreate?: typeof createUser
  handleOnUpdate?: typeof updateUser
  callback?: Callback
  onCancel?: Callback
}

const UserViewer: FC<UserViewerProps> = (props) => {
  const {
    mode,
    user: userProps,
    handleOnCreate,
    handleOnUpdate,
    callback,
    onCancel,
  } = props

  const [user, setUser] = useState<User>(dummyUser)

  useEffect(() => {
    if (userProps) {
      setUser(userProps)
    }
  }, [mode, userProps])

  const handleUserChange = <K extends keyof User>(k: K) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((user) => ({
        ...user,
        [k]: e.target.value,
      }))
    }
  }

  const handleContinue = () => {
    handleOnCreate?.(user, callback)
    handleOnUpdate?.(user, callback)
  }

  const handleCancel = () => {
    onCancel?.()
  }

  return (
    <div role="contentinfo">
      <Grid container spacing={3}>
        <Grid item md={6} sm={12} xs={12}>
          <Input
            label="Email"
            disabled={mode !== 'create'}
            size="small"
            value={user.email}
            handleOnChange={handleUserChange('email')}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Input
            label="Contraseña"
            disabled={mode === 'read'}
            size="small"
            value={user.password}
            handleOnChange={handleUserChange('password')}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Input
            label="Nombre(s)"
            disabled={mode === 'read'}
            size="small"
            value={user.firstName}
            handleOnChange={handleUserChange('firstName')}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Input
            label="Apellido(s)"
            disabled={mode === 'read'}
            size="small"
            value={user.lastName}
            handleOnChange={handleUserChange('lastName')}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <Select
            label="Tipo de usuario"
            disabled={mode === 'read'}
            value={user.role}
            optionValues={Object.values(UserRoles)}
            handleOnChange={(e) => {
              setUser((user) => ({
                ...user,
                role: e.target.value as UserRoles,
              }))
            }}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          {user.role === UserRoles.STUDENT && (
            <Select
              label="Tipo de discapacidad"
              disabled={mode === 'read'}
              value={user.disability}
              required={false}
              optionValues={Object.values(StudentDisability)}
              handleOnChange={(e) => {
                setUser((user) => ({
                  ...user,
                  disability: e.target.value as StudentDisability,
                }))
              }}
            />
          )}
        </Grid>

        {/* Action buttons */}
        {mode !== 'read' && (
          <ActionButtons
            handleFirstButtonCallback={handleContinue}
            handleSecondButtonCallback={handleCancel}
          />
        )}
      </Grid>
    </div>
  )
}

export default UserViewer
