import { createHandlerEnhanced, HttpMethods } from '@webapp/shared'
import { Endpoints } from '#constants'
import { GetMeSuccess } from '#types'
import { getMe_200_fixture } from '../fixtures'

const meHandlers = createHandlerEnhanced<GetMeSuccess>({
  endpoint: Endpoints.ME,
  method: HttpMethods.GET,
  fixturesMapping: {
    successful: {
      '200_OK': getMe_200_fixture,
    },
  },
})

export const me_200_handler = meHandlers['200_OK']
