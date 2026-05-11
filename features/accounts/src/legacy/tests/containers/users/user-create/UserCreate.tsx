import React, { FC } from 'react'
import useActions from '@hooks/use-actions'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectUsersStatus } from '@selectors/users'
import Error from '@components/error/Error'
import UserViewer from '@containers/users/user-viewer/UserViewer'
import Loading from '@components/loading/Loading'
import { redirectTo } from '@utils'
import { Paths } from '@routes'

const UserCreate: FC = () => {
  const { createUser } = useActions()
  const { loading, error } = useTypedSelector(selectUsersStatus)

  return (
    <div data-testid="user-create-page">
      {loading && <Loading color="primary" />}

      <UserViewer
        mode="create"
        handleOnCreate={createUser}
        callback={redirectTo(Paths.USERS)}
        onCancel={redirectTo(Paths.USERS)}
      />
      {error && (
        <div>
          <br />
          <Error>{error}</Error>
        </div>
      )}
    </div>
  )
}

export default UserCreate
