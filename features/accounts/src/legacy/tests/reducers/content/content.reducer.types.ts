import { BaseReducerState } from '../app/app.reducer.types'
import { Content, Record } from '../../interfaces/content/content.types'

export interface ContentReducerState extends BaseReducerState {
  resource: Content | null
  records: Record[]
}
