//import { createUseActions } from './create-use-actions'
import { createUseAppSelector } from './create-use-app-selector'

export function createHooks<TThunks extends Record<string, any>>(thunks: TThunks) {
  return {
    //  useActions: () => createUseActions<TThunks>(thunks),
    useAppSelector: createUseAppSelector(),
  }
}
