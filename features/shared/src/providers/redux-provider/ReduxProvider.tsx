import { FC, ReactNode } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'

export interface ReduxProviderProps {
  children: ReactNode
  storeConfig: Store
}

export const ReduxProvider: FC<ReduxProviderProps> = (props) => {
  return <Provider store={props.storeConfig}>{props.children}</Provider>
}
