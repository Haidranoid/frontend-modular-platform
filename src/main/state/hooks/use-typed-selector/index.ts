import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/interfaces/app.reducer.types'

const useTypedSelector: TypedUseSelectorHook<AppReducerState> = useSelector

export default useTypedSelector
