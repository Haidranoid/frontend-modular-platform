import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useActions from '@hooks/use-actions'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectSingleUser, selectUsersStatus } from '@selectors/users'
import Loading from '@components/loading/Loading'
import Error from '@components/error/Error'
import UserViewer from '../user-viewer/UserViewer'
import { redirectTo } from '@utils'
import { Paths } from '@routes'

const UserEdit: FC = () => {
  const params = useParams<{ userId: string }>()
  const { getSingleUser, updateUser } = useActions()
  const { loading, error } = useTypedSelector(selectUsersStatus)
  const singleUser = useTypedSelector(selectSingleUser)

  useEffect(() => {
    getSingleUser({
      id: Number(params.userId),
    })
  }, [])

  return (
    <div data-testid="user-edit-page">
      {loading && <Loading color="primary" />}

      {singleUser && (
        <UserViewer
          mode="edit"
          user={singleUser}
          handleOnUpdate={updateUser}
          callback={redirectTo(Paths.USERS)}
          onCancel={redirectTo(Paths.USERS)}
        />
      )}
      {error && (
        <div>
          <br />
          <Error>{error}</Error>
        </div>
      )}
    </div>
  )
}

export default UserEdit
