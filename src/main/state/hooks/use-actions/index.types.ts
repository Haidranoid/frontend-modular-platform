import { allActions } from './index'

type ActionCreatorsMapObject = typeof allActions

type Actions = ReturnType<ActionCreatorsMapObject[keyof ActionCreatorsMapObject]>

export { Actions }
