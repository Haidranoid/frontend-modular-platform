import React from 'react'
import RouteRestrictions from './constants/RouteRestrictions'
import { Roles } from '@constants'

export interface RouteProps {
  exact: boolean
  path: string
  restrictionType: RouteRestrictions
  container: React.FC
  allowedRoles?: Array<Roles>
}
