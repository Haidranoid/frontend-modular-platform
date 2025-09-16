import { createUseAppSelector } from './create-use-app-selector'

export function createHooks<RootState>() {
  //const useAppSelector = createUseAppSelector<RootState>()

  return {
    useAppSelector: createUseAppSelector<RootState>(),
  }
}
