import { Api } from '@webapp/shared/types'

export interface GlobalApi extends Api {
  init: () => Promise<void>
}
