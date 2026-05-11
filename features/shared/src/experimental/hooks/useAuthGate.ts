// hooks/useAuthGate.ts
import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import useTypedSelector from '@hooks/use-typed-selector'
import useActions from '@hooks/use-actions'
import { selectCurrentUser, selectAuthStatus } from '@selectors/authentication'
import { Paths } from '@routes'

export const useAuthGate = () => {
  const { me } = useActions()
  const user = useTypedSelector(selectCurrentUser)
  const { loading, error } = useTypedSelector(selectAuthStatus)

  const history = useHistory()
  const location = useLocation()
  const [checkedAuth, setCheckedAuth] = useState(false)

  useEffect(() => {
    if (!user) {
      me(undefined, () => setCheckedAuth(true))
    } else {
      setCheckedAuth(true)
    }
  }, [])

  useEffect(() => {
    if (error && !user) {
      history.replace(Paths.LOGIN, {
        from: location.pathname,
      })
    }
  }, [error, user])

  return { checkedAuth, loading }
}
