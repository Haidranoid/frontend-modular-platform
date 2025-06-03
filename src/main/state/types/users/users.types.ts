import { Roles } from '@constants'

export interface User {
  id: number
  email: string
  password: string
  firstName: string
  lastName: string
  role: Roles | null
}
