import type { RouteObject } from 'react-router'
import { RouteRestrictionLevels } from '#constants'

export type RouteObjectEnhanced = RouteObject & {
  id?: string
  restrictionLevel?: RouteRestrictionLevels
  children?: RouteObjectEnhanced[]
}
