import {ActionCreatorsMapObject, Dispatch} from "redux";
import {createUseActions} from './create-use-actions'
import {createUseAppSelector} from './create-use-app-selector'

export const createHooks = <AppDispatch extends Dispatch, RootState = unknown>(
    thunks: ActionCreatorsMapObject,
) => {
    return {
        useDispatch: createUseActions<AppDispatch>(thunks),
        useAppSelector: createUseAppSelector<RootState>(),
    }
}